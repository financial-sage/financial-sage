"use client";

import { useEffect, useState } from "react";
import AdminClient from "./AdminClient";
import { supabase, isUserAdmin } from "../../../lib/supabaseClient";
// import { isUserAdmin } from "../../lib/supabaseAdmin";

export default function AdminPage() {
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [session, setSession] = useState<import('@supabase/supabase-js').Session | null>(null);

  useEffect(() => {
    const fetchSession = async () => {
      const { data } = await supabase.auth.getSession();
      const rawSession = data?.session ?? null;
      setSession(rawSession);

      if (rawSession?.user) {
        const admin = await isUserAdmin(rawSession.user.id);
        console.log('Is user admin?', admin);
        
        setIsAdmin(admin);
      }

      setLoading(false);
    };

    fetchSession();
  }, []);

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (!session) {
    return (
      <div>
        <h1>No autorizado</h1>
        <p>Debes iniciar sesión para acceder al panel de administración.</p>
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div>
        <h1>Acceso denegado</h1>
        <p>Necesitas el rol <strong>admin</strong> para acceder a esta sección.</p>
      </div>
    );
  }

  return (
    <div>
      <AdminClient />
    </div>
  );
}
