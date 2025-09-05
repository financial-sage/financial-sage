"use client"
import React, { useState, useRef, useEffect } from "react";

import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
import { AppSession, mapSupabaseSessionToApp } from "@/lib/types";

export default function Header() {
  const router = useRouter();

  const [openDropdown, setOpenDropdown] = useState<"profile" | "notification" | null>(null);
  const profileRef = useRef<HTMLDivElement>(null);
  const notificationRef = useRef<HTMLDivElement>(null);

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
        // Mejorar la obtención de la imagen de perfil
        const profilePicture = mapped?.user?.metadata?.picture ||
          mapped?.user?.metadata?.avatar_url ||
          mapped?.user?.metadata?.image ||
          mapped?.user?.picture;

        setImgSrc(
          typeof profilePicture === "string" && profilePicture.trim() !== ""
            ? profilePicture
            : "/default-avatar.svg"
        );
      }
      setLoading(false);
    };

    fetchSession();

    function handleClickOutside(event: MouseEvent) {
      if (
        profileRef.current && !profileRef.current.contains(event.target as Node) &&
        notificationRef.current && !notificationRef.current.contains(event.target as Node)
      ) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
    const { data: sub } = supabase.auth.onAuthStateChange((_event, s) => {
      const mapped = mapSupabaseSessionToApp(s ?? null);
      if (!mapped) router.push('/login');
      else {
        setSession(mapped);
        // Mejorar la obtención de la imagen de perfil
        const profilePicture = mapped?.user?.metadata?.picture ||
          mapped?.user?.metadata?.avatar_url ||
          mapped?.user?.metadata?.image ||
          mapped?.user?.picture;

        setImgSrc(
          typeof profilePicture === "string" && profilePicture.trim() !== ""
            ? profilePicture
            : "/default-avatar.svg"
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
    <div className="header">
      <div className="header-title">Financial Sage</div>
      <div className="header-menu">
        {/* <a className="menu-link is-active" href="#">Apps</a>
        <a className="menu-link notify" href="#">Your work</a>
        <a className="menu-link" href="#">Discover</a>
        <a className="menu-link notify" href="#">Market</a> */}
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search" />
      </div>
      <div className="header-profile">
        <div className="notification-dropdown" ref={notificationRef}>
          <div
            className="notification-trigger"
            tabIndex={0}
            onClick={() => setOpenDropdown(openDropdown === "notification" ? null : "notification")}
          >
            <span className="notification-number">3</span>
            <svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-bell">
              <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" />
            </svg>
          </div>
          <div className={`notification-menu${openDropdown === "notification" ? " show" : ""}`}>
            <div className="notification-menu-title">Notificaciones</div>
            <div className="notification-menu-divider"></div>
            <div className="notification-item">
              <svg className="item-icon" viewBox="0 0 24 24" width="18" height="18">
                <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z" fill="currentColor" />
              </svg>
              <span><strong>Nuevo mensaje</strong> de Juan Pérez</span>
              <span className="profile-badge">1 min</span>
            </div>
            <div className="notification-item">
              <svg className="item-icon" viewBox="0 0 24 24" width="18" height="18">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" fill="currentColor" />
              </svg>
              <span>Actualización de sistema disponible</span>
              <span className="profile-badge">5 min</span>
            </div>
            <div className="notification-item">
              <svg className="item-icon" viewBox="0 0 24 24" width="18" height="18">
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" fill="currentColor" />
              </svg>
              <span>Tu perfil fue visitado</span>
              <span className="profile-badge">10 min</span>
            </div>
          </div>
        </div>

        <div className="profile-dropdown" ref={profileRef}>
          <img
            className="profile-img"
            src={imgSrc || "/default-avatar.svg"}
            alt="Profile"
            tabIndex={0}
            onClick={() => setOpenDropdown(openDropdown === "profile" ? null : "profile")}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "/default-avatar.svg";
            }}
          />
          {/* <div className="d-none d-xl-block ps-2">
            <div>{session?.user?.full_name}</div>
            <div className="mt-1 small text-secondary">{session?.user?.email}</div>
          </div> */}
          <div className={`profile-menu${openDropdown === "profile" ? " show" : ""}`}>
            <button className="profile-menu-item">View Profile</button>
            <button className="profile-menu-item" onClick={handleLogout}>Cerrar sesión</button>
          </div>
        </div>
      </div>
    </div>
  );
}
