// Robots.txt configuration for search engines

export default function robots() {
    const baseUrl = 'https://cerebrumfx.com';

    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: [
                    '/api/',
                    '/_next/',
                    '/private/',
                    '/*/dashboard',
                    '/admin/',
                ],
            },
            {
                // Explicitly allow bot to crawl sign-in if needed, 
                // but usually auth should stay private.
                // However, GSC error is annoying, so we ensure standard paths are OK.
                userAgent: '*',
                allow: '/sign-in',
                allow: '/sign-up',
            },
            {
                userAgent: 'Googlebot',
                allow: '/',
            },
            {
                userAgent: 'Bingbot',
                allow: '/',
            },
            {
                userAgent: 'GPTBot',
                allow: '/',  // Allow AI crawlers for discoverability
            },
            {
                userAgent: 'ChatGPT-User',
                allow: '/',
            },
            {
                userAgent: 'Google-Extended',
                allow: '/',  // Allow Gemini/Bard
            },
            {
                userAgent: 'PerplexityBot',
                allow: '/',
            },
            {
                userAgent: 'ClaudeBot',
                allow: '/',
            },
        ],
        sitemap: `${baseUrl}/sitemap.xml`,
        host: baseUrl,
    };
}
