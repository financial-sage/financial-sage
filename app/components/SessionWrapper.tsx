"use client"

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { supabase } from "../../lib/supabaseClient";
import { AppSession, mapSupabaseSessionToApp } from "../../lib/types";
import Header from "./Header";
import Aside from "./Aside";
import Footer from "./Footer";
import Script from "next/script";

interface SessionWrapperProps {
  children: React.ReactNode;
}

export default function SessionWrapper({ children }: SessionWrapperProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [session, setSession] = useState<AppSession | null>(null);
  const [loading, setLoading] = useState(true);

  // Rutas que no requieren autenticación
  const publicRoutes = ['/login', '/register'];
  const isPublicRoute = publicRoutes.includes(pathname);

  useEffect(() => {
    let mounted = true;

    const fetchSession = async () => {
      const { data } = await supabase.auth.getSession();
      const rawSession = data?.session ?? null;

      if (!mounted) return;
      
      if (!rawSession && !isPublicRoute) {
        router.push('/login');
      } else if (rawSession) {
        const mapped = mapSupabaseSessionToApp(rawSession);
        setSession(mapped);
      }
      setLoading(false);
    };

    fetchSession();

    const { data: sub } = supabase.auth.onAuthStateChange((_event, s) => {
      const mapped = mapSupabaseSessionToApp(s ?? null);
      if (!mapped && !isPublicRoute) {
        router.push('/login');
      } else if (mapped) {
        setSession(mapped);
      }
    });

    return () => {
      mounted = false;
      sub?.subscription?.unsubscribe?.();
    };
  }, [router, pathname, isPublicRoute]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  // Si es una ruta pública, mostrar solo el contenido sin layout
  if (isPublicRoute) {
    return <>{children}</>;
  }

  // Si no hay sesión y no es ruta pública, no mostrar nada (se redirigirá)
  if (!session) {
    return null;
  }

  // Mostrar el layout completo para rutas autenticadas
  return (
    <>
      <div className="page">
        <Aside />
        <div className="page-wrapper">
          <Header />
          <div className="page-body">
            <div className="container-fluid">
              {children}
            </div>
          </div>
          <Footer />
        </div>
      </div>
      
      {/* Tabler JS para dropdowns, collapse, etc. */}
      <Script 
        src="https://cdn.jsdelivr.net/npm/@tabler/core@1.0.0-beta17/dist/js/tabler.min.js" 
        strategy="afterInteractive" 
      />
    </>
  );
}
