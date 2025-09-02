import { createServerClient } from '@supabase/ssr'
import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function GET(request: NextRequest) {
  const { searchParams, origin } = new URL(request.url)
  const code = searchParams.get('code')
  // if "next" is in param, use it as the redirect URL
  const next = searchParams.get('next') ?? '/dashboard'

  if (code) {
    const cookieStore = await cookies()
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          get(name: string) {
            return cookieStore.get(name)?.value
          },
          set(name: string, value: string, options: any) {
            cookieStore.set({ name, value, ...options })
          },
          remove(name: string, options: any) {
            cookieStore.set({ name, value: '', ...options })
          },
        },
      }
    )
    const { error } = await supabase.auth.exchangeCodeForSession(code)
    if (!error) {
      // Get the current session
      const { data: { session } } = await supabase.auth.getSession()
      if (session) {
        // Check if profile exists
        const { data: profile } = await supabase
          .from('profiles')
          .select('*')
          .or(`user_id.eq.${session.user.id},id.eq.${session.user.id}`)
          .single();

        // If no profile exists, create one
        if (!profile) {
          const { error: insertError } = await supabase
            .from('profiles')
            .insert([
              { 
                user_id: session.user.id,
                full_name: session.user.user_metadata?.full_name || '',
                created_at: new Date().toISOString(),
                updated_at: new Date().toISOString()
              }
            ]);
          
          if (insertError) {
            console.error('Error creating profile:', insertError);
            return NextResponse.redirect(`${origin}/welcome`);
          }
        }
      }
      return NextResponse.redirect(`${origin}/welcome`)
    }
  }

  // return the user to an error page with instructions
  return NextResponse.redirect(`${origin}/login?error=Could not authenticate user`)
}
