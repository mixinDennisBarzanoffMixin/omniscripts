import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { password } = await request.json();
    
    // Get password from environment variable (server-side only)
    const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "omniscripts2024";
    
    if (password === ADMIN_PASSWORD) {
      // Create response with success
      const response = NextResponse.json({ success: true });
      
      // Set authentication cookie
      response.cookies.set('auth-token', 'authenticated', {
        httpOnly: true, // More secure - not accessible via JavaScript
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 86400, // 24 hours
        path: '/'
      });
      
      return response;
    } else {
      return NextResponse.json(
        { success: false, error: 'Invalid password' },
        { status: 401 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Invalid request' },
      { status: 400 }
    );
  }
}
