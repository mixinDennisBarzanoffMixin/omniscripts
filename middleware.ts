import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Check if the request is for protected pages (invoices, contracts, rko)
  if (
    request.nextUrl.pathname.startsWith('/invoices') ||
    request.nextUrl.pathname.startsWith('/contracts') ||
    request.nextUrl.pathname.startsWith('/rko')
  ) {
    // Check if user is authenticated
    const isAuthenticated = request.cookies.get('auth-token')?.value === 'authenticated'
    
    if (!isAuthenticated) {
      // Redirect to login page with the current path as redirect parameter
      const loginUrl = new URL('/login', request.url)
      loginUrl.searchParams.set('redirect', request.nextUrl.pathname)
      return NextResponse.redirect(loginUrl)
    }
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: ['/invoices/:path*', '/contracts/:path*', '/rko/:path*']
}
