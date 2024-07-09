import { NextResponse, NextRequest } from 'next/server'

const paths = ['/login', '/register']
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {

    const token = request.cookies.get("token")?.value || null;
    const urlPath = request.nextUrl.pathname;

    if(!token && !paths.includes(urlPath)){
        return NextResponse.redirect(new URL('/login', request.url))
    }

    if(token && (paths.includes(urlPath))){
        return NextResponse.redirect(new URL('/home', request.url))
    }
}
 
export const config = {
  matcher: ['/login', '/register', '/posts', '/home']
}