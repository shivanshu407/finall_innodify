import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Simple in-memory rate limiting store (for production, use Redis)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

// Rate limit configuration
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const RATE_LIMITS: Record<string, number> = {
  '/api/upload': 5,           // 5 uploads per minute
  '/api/blogs': 20,            // 20 requests per minute
  '/api/chat': 10,             // 10 chat requests per minute
  default: 30,                 // 30 requests per minute for other routes
};

function getRateLimit(pathname: string): number {
  // Check for exact match first
  if (RATE_LIMITS[pathname]) {
    return RATE_LIMITS[pathname];
  }

  // Check for pattern match
  for (const [pattern, limit] of Object.entries(RATE_LIMITS)) {
    if (pathname.startsWith(pattern)) {
      return limit;
    }
  }

  return RATE_LIMITS.default;
}

function checkRateLimit(ip: string, pathname: string): { allowed: boolean; remaining: number; resetTime: number } {
  const key = `${ip}:${pathname}`;
  const now = Date.now();
  const limit = getRateLimit(pathname);

  let record = rateLimitStore.get(key);

  if (!record || now > record.resetTime) {
    // Create new record or reset expired one
    record = {
      count: 1,
      resetTime: now + RATE_LIMIT_WINDOW,
    };
    rateLimitStore.set(key, record);

    return {
      allowed: true,
      remaining: limit - 1,
      resetTime: record.resetTime,
    };
  }

  if (record.count >= limit) {
    return {
      allowed: false,
      remaining: 0,
      resetTime: record.resetTime,
    };
  }

  record.count++;

  return {
    allowed: true,
    remaining: limit - record.count,
    resetTime: record.resetTime,
  };
}

// Clean up old entries periodically
setInterval(() => {
  const now = Date.now();
  for (const [key, record] of rateLimitStore.entries()) {
    if (now > record.resetTime) {
      rateLimitStore.delete(key);
    }
  }
}, 5 * 60 * 1000); // Clean up every 5 minutes

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Apply rate limiting to API routes
  if (pathname.startsWith('/api/')) {
    const ip = request.ip || request.headers.get('x-forwarded-for') || 'unknown';
    const { allowed, remaining, resetTime } = checkRateLimit(ip, pathname);

    if (!allowed) {
      return NextResponse.json(
        { error: 'Rate limit exceeded. Please try again later.' },
        {
          status: 429,
          headers: {
            'X-RateLimit-Limit': String(getRateLimit(pathname)),
            'X-RateLimit-Remaining': '0',
            'X-RateLimit-Reset': String(resetTime),
            'Retry-After': String(Math.ceil((resetTime - Date.now()) / 1000)),
          },
        }
      );
    }

    // Add rate limit headers to successful responses
    const response = NextResponse.next();
    response.headers.set('X-RateLimit-Limit', String(getRateLimit(pathname)));
    response.headers.set('X-RateLimit-Remaining', String(remaining));
    response.headers.set('X-RateLimit-Reset', String(resetTime));

    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/api/:path*',
  ],
};
