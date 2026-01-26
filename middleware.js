import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n/config';

const intlMiddleware = createMiddleware({
    locales,
    defaultLocale,
    localePrefix: 'always'
});

export default intlMiddleware;

export const config = {
    matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
