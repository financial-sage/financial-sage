import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import { NextRequest } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const cookieStore = await cookies()
    
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          get(name: string) {
            return cookieStore.get(name)?.value
          },
        },
      }
    )

    const { data: { session }, error: sessionError } = await supabase.auth.getSession()
    
    if (sessionError || !session) {
      return Response.json({ error: 'No authenticated session' }, { status: 401 })
    }

    const body = await request.json();
    const { amount, description, category, date } = body ?? {};

    const parsedAmount = Number(amount);
    if (!Number.isFinite(parsedAmount) || !description || !category) {
      return Response.json({ error: 'Invalid payload' }, { status: 400 });
    }

    const payload = {
      user_id: session.user.id,
      amount: parsedAmount,
      description,
      category,
      date: date ?? new Date().toISOString(),
    };

    const { data, error } = await supabase.from('transactions').insert(payload);
    if (error) {
      return Response.json({ error: error.message ?? error }, { status: 500 });
    }

    return Response.json({ data }, { status: 201 });
  } catch (err: any) {
    return Response.json({ error: err?.message ?? String(err) }, { status: 500 });
  }
}
