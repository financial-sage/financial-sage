"use client"

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
import { AppSession, mapSupabaseSessionToApp } from "../../lib/types";
import LottieAnimation from "../LottieAnimation";
import creditCardAnimation from "../../public/animations/credit-card.json";

export default function SessionClient() {
  const router = useRouter();
  const [session, setSession] = useState<AppSession | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    const fetchSession = async () => {
      const { data } = await supabase.auth.getSession();
      const rawSession = data?.session ?? null;

      if (!mounted) return;
      if (!rawSession) {
        router.push('/login');
      } else {
        const mapped = mapSupabaseSessionToApp(rawSession);
        setSession(mapped);
      }
      setLoading(false);
    };

    fetchSession();

    const { data: sub } = supabase.auth.onAuthStateChange((_event, s) => {
      const mapped = mapSupabaseSessionToApp(s ?? null);
      if (!mapped) router.push('/login');
      else {
        setSession(mapped);
      }
    });

    return () => {
      mounted = false;
      sub?.subscription?.unsubscribe?.();
    };
  }, [router]);

  if (loading) {
    return (
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        minHeight: '50vh',
        gap: '1rem'
      }}>
        <LottieAnimation 
          animationData={creditCardAnimation}
          width={120}
          height={120}
          loop={true}
          autoplay={true}
        />
        <p style={{ color: '#8b5cf6', fontWeight: '600' }}>Cargando información del usuario...</p>
      </div>
    );
  }

  const Feature = ({ icon, title, children }: { icon: React.ReactNode, title: string, children: React.ReactNode }) => (
    <div style={{
      background: 'rgba(255, 255, 255, 0.05)',
      padding: '1.5rem',
      borderRadius: '12px',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      textAlign: 'center',
      flex: 1,
      minWidth: '200px'
    }}>
      <div style={{
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        background: 'rgba(139, 92, 246, 0.2)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto 1rem'
      }}>
        {icon}
      </div>
      <h3 style={{ color: '#e5e7eb', margin: '0 0 0.5rem 0', fontSize: '1.1rem' }}>{title}</h3>
      <p style={{ color: '#9ca3af', margin: 0, fontSize: '0.9rem' }}>{children}</p>
    </div>
  );

  return (
    <div style={{ 
      padding: '2rem', 
      maxWidth: '900px', 
      margin: '0 auto',
      fontFamily: 'sans-serif',
      color: '#e5e7eb'
    }}>
      <header style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
          Hola, <span style={{
            background: 'linear-gradient(90deg, #c084fc, #67e8f9)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
          }}>{session?.user?.full_name || 'Usuario'}</span>!
        </h1>
        <p style={{ fontSize: '1.1rem', color: '#9ca3af' }}>
          FinancialSage te ayuda a controlar tus finanzas con registro de gastos, categorías personalizadas y presupuestos inteligentes.
        </p>
      </header>

      <section style={{ marginBottom: '3rem' }}>
        <div style={{
          display: 'flex',
          gap: '1.5rem',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <Feature 
            icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#c084fc" style={{ width: 24, height: 24 }}><path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" /></svg>}
            title="Registro de Gastos"
          >
            Anota tus transacciones diarias de forma rápida y sencilla.
          </Feature>
          <Feature 
            icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#c084fc" style={{ width: 24, height: 24 }}><path d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3z" /><path d="M6 6h.008v.008H6V6z" /></svg>}
            title="Categorías Personalizadas"
          >
            Organiza tus gastos en grupos que se ajusten a tu estilo de vida.
          </Feature>
          <Feature 
            icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#c084fc" style={{ width: 24, height: 24 }}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V6.375c0-.621.504-1.125 1.125-1.125h.375m18 0h-4.5M3.75 18h4.5m0 0h4.5m0 0h4.5m0 0h4.5m-13.5-9H21M3.75 9h4.5m0 0h4.5m0 0h4.5m0 0h4.5" /></svg>}
            title="Presupuestos Inteligentes"
          >
            Define límites de gasto y recibe alertas para no excederte.
          </Feature>
        </div>
      </section>

      <div style={{
        background: 'linear-gradient(90deg, rgba(192, 132, 252, 0.2), rgba(103, 232, 249, 0.2))',
        borderRadius: '12px',
        padding: '2rem',
        textAlign: 'center',
        border: '1px solid rgba(192, 132, 252, 0.5)'
      }}>
        <h3 style={{ color: 'white', margin: '0 0 1rem 0', fontSize: '1.2rem' }}>Consejo Rápido</h3>
        <p style={{ color: '#e5e7eb', margin: '0 0 1.5rem 0' }}>
          Registra tu primer gasto para empezar a ahorrar.
        </p>
        <button 
          onClick={() => router.push('/transactions')}
          style={{
            background: '#8b5cf6',
            color: 'white',
            border: 'none',
            padding: '0.75rem 1.5rem',
            borderRadius: '8px',
            fontSize: '1rem',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'background-color 0.2s',
          }}
        >
          Ir a Transacciones
        </button>
      </div>
    </div>
  );
}