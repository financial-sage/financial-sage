"use client"

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../lib/supabaseClient";
import { AppSession, mapSupabaseSessionToApp } from "../../lib/types";

interface SessionClientProps {}

export default function SessionClient(props: SessionClientProps) {
  const router = useRouter();
  const [session, setSession] = useState<AppSession | null>(null);
  const [imgSrc, setImgSrc] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    const fetchSession = async () => {
      const { data } = await supabase.auth.getSession();
      const rawSession = data?.session ?? null;
      console.log('rawSession', rawSession);

      if (!mounted) return;
      if (!rawSession) {
        router.push('/login');
      } else {
        const mapped = mapSupabaseSessionToApp(rawSession);
        setSession(mapped);
        setImgSrc(
          typeof mapped?.user?.metadata?.picture === "string"
            ? mapped.user.metadata.picture
            : undefined
        );
      }
      setLoading(false);
    };

    fetchSession();

    const { data: sub } = supabase.auth.onAuthStateChange((_event, s) => {
      const mapped = mapSupabaseSessionToApp(s ?? null);
      if (!mapped) router.push('/login');
      else {
        setSession(mapped);
        setImgSrc(
          typeof mapped?.user?.metadata?.picture === "string"
            ? mapped.user.metadata.picture
            : undefined
        );
      }
    });

    return () => {
      mounted = false;
      sub?.subscription?.unsubscribe?.();
    };
  }, [router]);

  if (loading) return <div>Cargando...</div>;

  return (
    <div>
      <h1>Bienvenido a FinancialSage</h1>
      <div style={{ whiteSpace: 'pre-wrap' }}>
        <strong>Email:</strong> {session?.user?.email}
      </div>
      <div style={{ marginTop: 8 }}>
        <h1>{session?.user?.full_name}</h1>

        {/* Mostrar URL cruda y enlace para abrir en nueva pestaña */}
        {imgSrc ? (
          <div>
            <img
              src={imgSrc}
              alt={session?.user?.full_name ?? 'avatar'}
              style={{ width: 128, height: 128, objectFit: 'cover', borderRadius: 8, marginTop: 8 }}
              onError={() => setImgSrc(undefined)}
            />
          </div>
        ) : (
          <div>No hay imagen disponible</div>
        )}

      </div>
    </div>
  );
}
