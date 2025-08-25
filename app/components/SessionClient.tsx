"use client"

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../lib/supabaseClient";

export default function SessionClient() {
  const router = useRouter();
  const [session, setSession] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    const fetchSession = async () => {
      const { data } = await supabase.auth.getSession();
      if (!mounted) return;
      if (!data?.session) {
        router.push('/login');
      } else {
        setSession(data.session);
      }
      setLoading(false);
    };

    fetchSession();

    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) router.push('/login');
      else setSession(session);
    });

    return () => {
      mounted = false;
      // unsubscribe if available
      sub?.subscription?.unsubscribe?.();
    };
  }, [router]);

  if (loading) return <div>Cargando...</div>;

  return (
    <div>
      <h1>Bienvenido a FinancialSage</h1>
      <p>{session?.user?.email}</p>
    </div>
  );
}

