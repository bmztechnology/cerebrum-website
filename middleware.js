import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import createMiddleware from "next-intl/middleware";
import { locales, defaultLocale } from "./i18n/config";

const intlMiddleware = createMiddleware({
    locales,
    defaultLocale,
    localePrefix: "always"
});

const isProtectedRoute = createRouteMatcher(["/:locale/dashboard(.*)"]);

export default clerkMiddleware(async (auth, req) => {
    // OPTIONAL: Basic Auth for "Maintenance Mode" or "Staging"
    const sitePassword = process.env.SITE_PASSWORD;
    if (sitePassword) {
        const basicAuth = req.headers.get("authorization");

        if (basicAuth) {
            const authValue = basicAuth.split(" ")[1];
            const [user, pwd] = atob(authValue).split(":");

            if (user === "admin" && pwd === sitePassword) {
                // Password valid, proceed normally
            } else {
                return new Response("Unauthorized", {
                    status: 401,
                    headers: { "WWW-Authenticate": 'Basic realm="Cerebrum Staging Area"' },
                });
            }
        } else {
            return new Response("Unauthorized", {
                status: 401,
                headers: { "WWW-Authenticate": 'Basic realm="Cerebrum Staging Area"' },
            });
        }
    }

    if (isProtectedRoute(req)) {
        await auth.protect();
    }

    // Check if the request is for an API route
    if (req.nextUrl.pathname.startsWith('/api') || req.nextUrl.pathname.startsWith('/trpc')) {
        return;
    }

    return intlMiddleware(req);
});

export const config = {
    matcher: [
        // Skip Next.js internals and all static files, unless found in search params
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest|exe)).*)',
        // Always run for API routes, EXCEPT health check
        '/(api(?!/health)|trpc)(.*)',
    ],
};
