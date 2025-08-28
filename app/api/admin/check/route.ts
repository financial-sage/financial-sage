import { NextResponse } from 'next/server';
import { supabase } from '../../../../lib/supabaseClient';
import { supabaseAdmin, isUserAdmin } from '../../../../lib/supabaseAdmin';

export async function GET(request: Request) {
  // read cookies to get Supabase access token
  const cookie = request.headers.get('cookie') ?? '';

  // Server-side get session using anon client with cookie
  const { data } = await supabase.auth.getSession();
  const rawSession = data?.session ?? null;

  if (!rawSession) return NextResponse.json({ ok: false, admin: false }, { status: 401 });

  const uid = rawSession.user?.id;
  if (!uid) return NextResponse.json({ ok: false, admin: false }, { status: 401 });

  const admin = await isUserAdmin(uid);
  return NextResponse.json({ ok: true, admin });
}
