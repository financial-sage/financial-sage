"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
import { AppSession, mapSupabaseSessionToApp } from "@/lib/types";

export default function Header() {
  const router = useRouter();

  const [session, setSession] = useState<AppSession | null>(null);
  const [imgSrc, setImgSrc] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const [notifications] = useState([
    { id: 1, text: "Nuevo pedido recibido", time: "hace 2 min", unread: true },
    { id: 2, text: "Usuario registrado", time: "hace 1 hora", unread: true },
    { id: 3, text: "Backup completado", time: "hace 3 horas", unread: false },
  ]);

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
  
  const handleLogout = () => {
    document.cookie = "token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    router.push("/login");
  };

  return (
    <header className="navbar navbar-expand-md d-print-none">
      <div className="container-xl">
        {/* Toggle sidebar en móvil */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#sidebar-menu"
          aria-controls="sidebar-menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Logo/Brand (visible en móvil) */}
        <h1 className="navbar-brand navbar-brand-autodark d-none-navbar-horizontal pe-0 pe-md-3">
          <a href="/dashboard">
          </a>
        </h1>

        {/* Barra de búsqueda */}
        <div className="navbar-nav flex-row order-md-last">
          {/* Búsqueda */}
          <div className="nav-item d-none d-md-flex me-3">
            <div className="btn-list">
              <form className="d-flex" role="search">
                <input
                  className="form-control"
                  type="search"
                  placeholder="Buscar..."
                  aria-label="Search"
                />
              </form>
            </div>
          </div>

          {/* Notificaciones */}
          <div className="nav-item dropdown d-none d-md-flex me-3">
            <a
              href="#"
              className="nav-link px-0"
              data-bs-toggle="dropdown"
              tabIndex={-1}
              aria-label="Show notifications"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
              </svg>
              <span className="badge bg-red"></span>
            </a>
            <div className="dropdown-menu dropdown-menu-arrow dropdown-menu-end dropdown-menu-card">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Últimas notificaciones</h3>
                </div>
                <div className="list-group list-group-flush list-group-hoverable">
                  {notifications.map((notif) => (
                    <div key={notif.id} className="list-group-item">
                      <div className="row align-items-center">
                        <div className="col-auto">
                          <span className={`status-dot ${notif.unread ? 'status-dot-animated bg-red' : 'bg-green'} d-block`}></span>
                        </div>
                        <div className="col text-truncate">
                          <a href="#" className="text-body d-block">{notif.text}</a>
                          <div className="d-block text-secondary text-truncate mt-n1">
                            {notif.time}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Usuario dropdown */}
          <div className="nav-item dropdown">
            <a
              href="#"
              className="nav-link d-flex lh-1 text-reset p-0"
              data-bs-toggle="dropdown"
              aria-label="Open user menu"
            >
              
              <span className="avatar avatar-sm" style={{ backgroundImage: `url(${imgSrc || '/default-avatar.png'})` }}>
              </span>
              <div className="d-none d-xl-block ps-2">
                <div>{session?.user?.full_name}</div>
                <div className="mt-1 small text-secondary">{session?.user?.email}</div>
              </div>
            </a>
            <div className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
              <a href="#" className="dropdown-item">Estado</a>
              <a href="/dashboard/profile" className="dropdown-item">Perfil</a>
              <a href="#" className="dropdown-item">Configuración</a>
              <div className="dropdown-divider"></div>
              <button onClick={handleLogout} className="dropdown-item">
                Cerrar sesión
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}