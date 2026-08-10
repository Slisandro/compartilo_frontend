import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Rutas públicas (sin autenticación)
const publicRoutes = ['/', '/login', '/register'];

// Rutas protegidas (requieren autenticación)
const protectedRoutes = ['/dashboard', '/rides', '/profile'];

export function middleware(request: NextRequest) {
    const token = request.cookies.get('access_token')?.value ||
        request.headers.get('authorization')?.replace('Bearer ', '');

    const { pathname } = request.nextUrl;

    // Verificar si la ruta es pública
    // const isPublicRoute = publicRoutes.some(route => pathname.startsWith(route));
    const isProtectedRoute = protectedRoutes.some(route => pathname.startsWith(route));

    // Si no hay token y la ruta es protegida, redirigir a login
    if (!token && isProtectedRoute) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    // Si hay token y la ruta es pública (login/register), redirigir a dashboard
    if (token && (pathname === '/login' || pathname === '/register')) {
        return NextResponse.redirect(new URL('/dashboard', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};