import { createServerClient, type CookieOptions } from '@supabase/ssr';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  // 1. Crear respuesta inicial y cliente de Supabase
  const res = NextResponse.next();
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return req.cookies.get(name)?.value;
        },
        set(name: string, value: string, options: CookieOptions) {
          res.cookies.set({
            name,
            value,
            ...options,
          });
        },
        remove(name: string, options: CookieOptions) {
          res.cookies.delete({
            name,
            ...options,
          });
        },
      },
    }
  );

  // 2. Verificar la sesión actual
  const { data: { session } } = await supabase.auth.getSession();
  const pathname = req.nextUrl.pathname;

  // 3. Permitir acceso libre a rutas públicas
  if (pathname.startsWith('/auth/') || pathname === '/') {
    return res;
  }

  // 4. Redireccionar a login si no hay sesión en rutas protegidas
  if (!session) {
    const redirectUrl = new URL('/login', req.url);
    redirectUrl.searchParams.set('returnUrl', pathname);
    return NextResponse.redirect(redirectUrl);
  }

  // 5. Verificar permisos de administrador para rutas admin
  if (pathname.startsWith('/admin')) {
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user?.user_metadata?.role || user.user_metadata.role !== 'admin') {
      // Log intento de acceso no autorizado
      console.log(`Unauthorized admin access attempt by user: ${user?.id}`);
      return NextResponse.redirect(new URL('/(root)/dashboard', req.url));
    }
  }

  // 6. Verificar acceso a API routes
  if (pathname.startsWith('/api/')) {
    // Añadir el ID del usuario al header para logging
    res.headers.set('X-User-Id', session.user.id);
    
    // Proteger rutas administrativas de la API
    if (pathname.startsWith('/api/admin/')) {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user?.user_metadata?.role || user.user_metadata.role !== 'admin') {
        return new NextResponse(
          JSON.stringify({ error: 'Unauthorized access' }),
          { status: 403, headers: { 'Content-Type': 'application/json' } }
        );
      }
    }
  }

  return res;
}

export const config = {
  matcher: [
    // Rutas protegidas
    '/(root)/:path*',
    
    // Rutas administrativas
    '/admin/:path*',
    
    // API routes
    '/api/:path*',
    
    // Rutas de autenticación (para gestión de redirects)
    '/auth/:path*',
    
    // Excluir archivos estáticos y favicon
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}
