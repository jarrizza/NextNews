import { NextResponse } from "next/server";

export function middleware(request) {
   // console.log(request);
    return NextResponse.next(); // forward to destination
} 

export const config = {
   // matcher: /^\/api\//,
   matcher: '/news'
}