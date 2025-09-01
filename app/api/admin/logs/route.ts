import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabaseClient';
import { supabaseAdmin, isUserAdmin } from '../../../../lib/supabaseAdmin';

export async function GET(request: Request) {
  // list logs - only admins
  const { data: s } = await supabase.auth.getSession();
  const rawSession = s?.session ?? null;
  const uid = rawSession?.user?.id;
  if (!uid) return NextResponse.json({ ok: false }, { status: 401 });
  const admin = await isUserAdmin(uid);
  if (!admin) return NextResponse.json({ ok: false }, { status: 403 });
  if (!supabaseAdmin) return NextResponse.json({ ok: false, error: 'server misconfigured' }, { status: 500 });

  const { data, error } = await supabaseAdmin
    .from('admin_access_logs')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(200);
  if (error) return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true, logs: data });
}

export async function POST(request: Request) {
  // create a log entry; allow any authenticated user to insert own log (RLS will enforce admin_id==auth.uid())
  const { data: s } = await supabase.auth.getSession();
  const rawSession = s?.session ?? null;
  const uid = rawSession?.user?.id;
  if (!uid) return NextResponse.json({ ok: false }, { status: 401 });

  const body = await request.json().catch(() => ({}));
  const payload = {
    admin_id: uid,
    action: body.action ?? 'access',
    ip: request.headers.get('x-forwarded-for') ?? null,
    user_agent: request.headers.get('user-agent') ?? null,
    metadata: body.metadata ?? {},
  };

  if (!supabaseAdmin) return NextResponse.json({ ok: false, error: 'server misconfigured' }, { status: 500 });

  const { data, error } = await supabaseAdmin.from('admin_access_logs').insert([payload]);
  if (error) return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true, entry: data?.[0] ?? null });
}
