"use client"

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../lib/supabaseClient";
import { AppSession, mapSupabaseSessionToApp } from "../../lib/types";
import LottieAnimation from "../components/LottieAnimation";
import moneyAnimation from "../../public/animations/Money.json";
import creditCardAnimation from "../../public/animations/credit-card.json";
import budgetbillAnimation from "../../public/animations/Budget-Bills.json";


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

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      {/* Header con animación de bienvenida */}
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        marginBottom: '2rem',
        flexDirection: 'column',
        gap: '1rem'
      }}>
        
        <LottieAnimation 
          animationData={budgetbillAnimation}
          width={300}
          height={300}
          loop={true}
          autoplay={true}
          speed={0.2}
        />
        <h1 style={{ 
          background: 'linear-gradient(90deg, #c084fc, #67e8f9, #34d399)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent',
          textAlign: 'center',
          fontSize: '2.5rem',
          fontWeight: '700',
          margin: 0
        }}>
          Bienvenido a FinancialSage
        </h1>
      </div>

      {/* Información del usuario */}
      <div style={{ 
        background: 'rgba(255, 255, 255, 0.06)',
        backdropFilter: 'blur(8px)',
        borderRadius: '12px',
        padding: '2rem',
        border: '1px solid rgba(139, 92, 246, 0.2)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
      }}>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '2rem',
          marginBottom: '1.5rem'
        }}>
          {imgSrc ? (
            <img
              src={imgSrc}
              alt={session?.user?.full_name ?? 'avatar'}
              style={{ 
                width: 80, 
                height: 80, 
                objectFit: 'cover', 
                borderRadius: '50%',
                border: '3px solid #8b5cf6',
                boxShadow: '0 4px 12px rgba(139, 92, 246, 0.3)',
                color: '#000',
              }}
              onError={() => setImgSrc(undefined)}
            />
          ) : (
            <div style={{
              width: 80,
              height: 80,
              borderRadius: '50%',
              background: 'linear-gradient(45deg, #8b5cf6, #06b6d4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '2rem',
              fontWeight: 'bold'
            }}>
              {session?.user?.full_name?.charAt(0) || 'U'}
            </div>
          )}
          
          <div>
            <h2 style={{ 
              color: 'rgba(53, 67, 82, 0.8)',
              margin: '0 0 0.5rem 0',
              fontSize: '1.5rem'
            }}>
              {session?.user?.full_name}
            </h2>
            <p style={{ 
              color: 'rgba(86, 104, 122, 0.8)',
              margin: 0,
              fontSize: '1rem'
            }}>
              <strong>Email:</strong> {session?.user?.email}
            </p>
          </div>
        </div>

        {/* Estadísticas o información adicional */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1rem',
          marginTop: '2rem'
        }}>
          <div style={{
            background: 'rgba(139, 92, 246, 0.1)',
            padding: '1rem',
            borderRadius: '8px',
            border: '1px solid rgba(139, 92, 246, 0.2)',
            textAlign: 'center'
          }}>
            <h3 style={{ color: '#c084fc', margin: '0 0 0.5rem 0' }}>Estado</h3>
            <p style={{ color: 'rgb(109, 50, 245)', margin: 0 }}>Activo</p>
          </div>
          
          <div style={{
            background: 'rgba(6, 182, 212, 0.1)',
            padding: '1rem',
            borderRadius: '8px',
            border: '1px solid rgba(6, 182, 212, 0.2)',
            textAlign: 'center'
          }}>
            <h3 style={{ color: '#67e8f9', margin: '0 0 0.5rem 0' }}>Última sesión</h3>
            <p style={{ color: 'rgb(109, 50, 245)', margin: 0 }}>Ahora</p>
          </div>
        </div>
      </div>
    </div>
  );
}
