import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Check if the request is for the invoices page
  if (request.nextUrl.pathname.startsWith('/invoices')) {
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
  matcher: ['/invoices/:path*']
}
