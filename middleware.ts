import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // 1) Protected pages guard
  if (pathname.startsWith('/invoices') || pathname.startsWith('/contracts') || pathname.startsWith('/rko')) {
    const isAuthenticated = request.cookies.get('auth-token')?.value === 'authenticated'
    if (!isAuthenticated) {
      const loginUrl = new URL('/login', request.url)
      loginUrl.searchParams.set('redirect', request.nextUrl.pathname)
      return NextResponse.redirect(loginUrl)
    }
  }

  // 2) Geo-based language preference
  // Skip API and static assets
  if (!pathname.startsWith('/api') && !pathname.startsWith('/_next') && !pathname.includes('.')) {
    const hasLang = request.cookies.get('preferred_lang')?.value
    if (!hasLang) {
      try {
        let country = (request as any).geo?.country || request.headers.get('x-vercel-ip-country') || null
        console.log('country', country);
        if (country === 'DE') {
          const response = NextResponse.next()
          // cache via cookie so we don't re-check on every request
          response.cookies.set('preferred_lang', 'de', { path: '/', httpOnly: false })
          return response
        }
      } catch {}
    }
  }

  return NextResponse.next()
}

export const config = {
  // Run on all routes except _next, static files; allows both auth and geo
  matcher: ['/((?!_next|.*\\..*).*)']
}
