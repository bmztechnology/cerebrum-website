import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from '../../i18n/config';
import HashScrollHandler from '../../components/HashScrollHandler';
import { Providers } from '../../components/Providers';
import '../globals.css';

import Script from 'next/script';
import { Inter, Orbitron } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-primary',
});

const orbitron = Orbitron({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-display',
});

export function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}

// SEO Metadata
export async function generateMetadata({ params }) {
    const { locale } = await params;
    const baseUrl = 'https://cerebrumfx.com';

    const titles = {
        en: 'Cerebrum Forex | AI-Powered EUR/USD Trading Software for MT5',
        fr: 'Cerebrum Forex | Logiciel de Trading EUR/USD Propulsé par IA pour MT5',
        es: 'Cerebrum Forex | Software de Trading EUR/USD con IA para MT5',
        pt: 'Cerebrum Forex | Software de Trading EUR/USD com IA para MT5'
    };

    const descriptions = {
        en: 'Trade EUR/USD with 5 AI models (XGBoost, LightGBM, CatBoost). Real-time signals, MT5 Expert Advisor, prop firm compatible. Free download.',
        fr: 'Tradez EUR/USD avec 5 modèles IA (XGBoost, LightGBM, CatBoost). Signaux temps réel, Expert Advisor MT5, compatible prop firms. Téléchargement gratuit.',
        es: 'Opera EUR/USD con 5 modelos IA (XGBoost, LightGBM, CatBoost). Señales en tiempo real, Expert Advisor MT5, compatible con prop firms. Descarga gratuita.',
        pt: 'Negocie EUR/USD com 5 modelos IA (XGBoost, LightGBM, CatBoost). Sinais em tempo real, Expert Advisor MT5, compatível com prop firms. Download gratuito.'
    };

    const keywords = {
        en: 'forex AI trading, EUR/USD bot, MetaTrader 5 EA, automated trading, prop firm compatible, AI predictions, XGBoost trading, forex signals, algo trading',
        fr: 'trading forex IA, bot EUR/USD, EA MetaTrader 5, trading automatisé, compatible prop firms, prédictions IA, trading XGBoost, signaux forex',
        es: 'trading forex IA, bot EUR/USD, EA MetaTrader 5, trading automatizado, compatible prop firms, predicciones IA, trading XGBoost, señales forex',
        pt: 'trading forex IA, bot EUR/USD, EA MetaTrader 5, trading automatizado, compatível prop firms, previsões IA, trading XGBoost, sinais forex'
    };

    return {
        metadataBase: new URL(baseUrl),
        title: titles[locale] || titles.en,
        description: descriptions[locale] || descriptions.en,
        keywords: keywords[locale] || keywords.en,
        authors: [{ name: 'Cerebrum Forex Team' }],
        creator: 'Cerebrum Forex',
        publisher: 'Cerebrum Forex',
        robots: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
            'max-snippet': -1,
            'max-video-preview': -1,
        },
        alternates: {
            canonical: `/${locale}`,
            languages: {
                'en': '/en',
                'fr': '/fr',
                'es': '/es',
                'pt': '/pt',
                'x-default': '/en',
            },
        },
        openGraph: {
            type: 'website',
            locale: locale === 'fr' ? 'fr_FR' : locale === 'es' ? 'es_ES' : locale === 'pt' ? 'pt_BR' : 'en_US',
            url: `${baseUrl}/${locale}`,
            siteName: 'Cerebrum Forex',
            title: titles[locale] || titles.en,
            description: descriptions[locale] || descriptions.en,
            images: [
                {
                    url: `${baseUrl}/og-image.jpg`,
                    width: 1200,
                    height: 630,
                    alt: 'Cerebrum Forex - AI Trading Software',
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            site: '@CerebrumFX',
            creator: '@CerebrumFX',
            title: titles[locale] || titles.en,
            description: descriptions[locale] || descriptions.en,
            images: [`${baseUrl}/twitter-image.jpg`],
        },
        verification: {
            google: null,
            yandex: null,
            bing: null,
        },
        category: 'finance',
        classification: 'Trading Software',
        icons: {
            icon: [
                { url: '/favicon.ico', sizes: 'any' },
                { url: '/icon.svg', type: 'image/svg+xml' },
            ],
            apple: '/apple-touch-icon.png',
        },
        manifest: '/manifest.json',
        appleWebApp: {
            capable: true,
            statusBarStyle: 'black-translucent',
            title: 'Cerebrum Forex',
        },
        formatDetection: {
            telephone: false,
            themeColor: '#00d4ff',
        },
    };
}

export default async function LocaleLayout({ children, params }) {
    const { locale } = await params;

    if (!locales.includes(locale)) {
        notFound();
    }

    const messages = await getMessages();

    return (
        <ClerkProvider>
            <html lang={locale} className={`${inter.variable} ${orbitron.variable}`}>
                <body>
                    <noscript>
                        <iframe
                            src="https://www.googletagmanager.com/ns.html?id=GTM-WVV3PSGS"
                            height="0"
                            width="0"
                            style={{ display: 'none', visibility: 'hidden' }}
                        />
                    </noscript>
                    <Script id="gtm" strategy="afterInteractive">
                        {`
                            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                            })(window,document,'script','dataLayer','GTM-WVV3PSGS');
                        `}
                    </Script>
                    <NextIntlClientProvider messages={messages} locale={locale}>
                        <Providers>
                            <HashScrollHandler />
                            {children}
                        </Providers>
                    </NextIntlClientProvider>
                </body>
            </html>
        </ClerkProvider>
    );
}
