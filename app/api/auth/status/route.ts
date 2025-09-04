import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  // Check if user is authenticated by reading the HTTPOnly cookie
  const authToken = request.cookies.get('auth-token')?.value;
  const isAuthenticated = authToken === 'authenticated';
  
  return NextResponse.json({ 
    authenticated: isAuthenticated 
  });
}
