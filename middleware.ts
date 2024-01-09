import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const { nextUrl} = request;
  if (nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL('/home', request.url));
  }  
}

export const config = {
  matcher: ['/:path*'],
};
