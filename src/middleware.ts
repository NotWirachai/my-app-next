import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
    if (request.nextUrl.pathname.startsWith('/')) {
    //  condition 
    return NextResponse.redirect(new URL('/login', request.url))
    }
}