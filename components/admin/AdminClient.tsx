"use client";

import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

type LogEntry = {
  id: string;
  admin_id: string;
  action: string;
  ip?: string;
  user_agent?: string;
  metadata?: Record<string, unknown>;
  created_at: string;
};

export default function AdminClient() {
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [is2FA, setIs2FA] = useState<boolean | null>(null);

  useEffect(() => {
    fetchLogs();
    check2FA();
  }, []);

  async function fetchLogs() {
    setLoading(true);
    const res = await fetch('/api/admin/logs');
    if (res.ok) {
      const json = await res.json();
      setLogs(json.logs ?? []);
    } else {
      setLogs([]);
    }
    setLoading(false);
  }

  async function check2FA() {
    // Minimal heuristic: check user_metadata for totp or phone_confirmed
    const { data } = await supabase.auth.getUser();
    const user = data?.user ?? null;
    const meta = user?.user_metadata ?? {};
    setIs2FA(Boolean(meta?.two_factor_enabled || meta?.phone_confirmed || meta?.totp_enabled));
  }

  async function createLog() {
    await fetch('/api/admin/logs', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ action: 'manual_inspect' }) });
    await fetchLogs();
  }

  return (
    <div>
      <section>
        <h2>Seguridad</h2>
        <div>2FA habilitada: {is2FA === null ? 'Cargando...' : is2FA ? 'Sí' : 'No'}</div>
      </section>

      <section style={{ marginTop: 16 }}>
        <h2>Registros de acceso</h2>
        <button onClick={fetchLogs} disabled={loading}>Refrescar</button>
        <button onClick={createLog} style={{ marginLeft: 8 }}>Crear log manual</button>
        {loading ? <div>Cargando logs...</div> : (
          <ul>
            {logs.map(l => (
              <li key={l.id} style={{ marginTop: 8, padding: 8, border: '1px solid #eee' }}>
                <div><strong>{l.action}</strong> — {new Date(l.created_at).toLocaleString()}</div>
                <div>IP: {l.ip}</div>
                <div>UA: {l.user_agent}</div>
                <pre>{JSON.stringify(l.metadata, null, 2)}</pre>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
