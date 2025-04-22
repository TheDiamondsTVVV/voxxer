import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  // Clone the request headers
  const requestHeaders = new Headers(request.headers)
 
  // Add new request headers
  requestHeaders.set('x-hello-from-middleware1', 'hello')
 
  // You can also set request headers in NextResponse.rewrite
  const response = NextResponse.next({
    request: {
      // New request headers
      headers: requestHeaders,
    },
  })
 
  // Set a new response header
  response.headers.set('x-hello-from-middleware2', 'hello')
  return response
}