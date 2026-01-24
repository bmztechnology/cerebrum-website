// Dynamic sitemap generation for SEO
// Generates URLs for all locales and pages

export default function sitemap() {
    const baseUrl = 'https://cerebrumforex.com';
    const locales = ['en', 'fr', 'es', 'pt'];
    const lastModified = new Date();

    // Main pages
    const pages = [
        { path: '', priority: 1.0, changeFrequency: 'weekly' },
        { path: '#features', priority: 0.9, changeFrequency: 'monthly' },
        { path: '#trading-modes', priority: 0.9, changeFrequency: 'monthly' },
        { path: '#tools', priority: 0.8, changeFrequency: 'weekly' },
        { path: '#download', priority: 0.95, changeFrequency: 'weekly' },
        { path: '#faq', priority: 0.85, changeFrequency: 'monthly' },
    ];

    // Generate URLs for each locale
    const urls = [];

    locales.forEach(locale => {
        pages.forEach(page => {
            urls.push({
                url: `${baseUrl}/${locale}${page.path}`,
                lastModified,
                changeFrequency: page.changeFrequency,
                priority: page.priority,
            });
        });
    });

    // Add documentation pages
    const docPages = [
        'index.html',
        'user_manual.html',
        'quickstart.html',
        'installation.html',
        'EA_SPECS.html',
        'TROUBLESHOOTING.html',
    ];

    docPages.forEach(doc => {
        urls.push({
            url: `${baseUrl}/docs/${doc}`,
            lastModified,
            changeFrequency: 'monthly',
            priority: 0.7,
        });
    });

    return urls;
}
