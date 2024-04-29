// pages/_middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('authToken');
  console.log('Token in middleware:', token);  // Add this to check if the token is being passed

  if (!token) {
      return NextResponse.redirect(new URL('/Login', request.url));
  }

  // Continue if the token exists
  return NextResponse.next();
}

