import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n/config';

const intlMiddleware = createMiddleware({
    locales,
    defaultLocale,
    localePrefix: 'always'
});

// Next.js 16 Proxy Function
export async function proxy(request) {
    console.log(`[Proxy] Request: ${request.nextUrl.pathname}`);
    return intlMiddleware(request);
}

export const config = {
    // Match all pathnames except for
    // - /api (API routes)
    // - /_next (Next.js internals)
    // - /_vercel (Vercel internals)
    // - all root files inside public (e.g. /favicon.ico)
    matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
