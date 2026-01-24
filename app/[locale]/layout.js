import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from '../../i18n/config';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SchemaOrg from '../../components/SchemaOrg';

export function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}

// SEO Metadata
export async function generateMetadata({ params }) {
    const { locale } = await params;
    const baseUrl = 'https://cerebrumforex.com';

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
            canonical: `${baseUrl}/${locale}`,
            languages: {
                'en': `${baseUrl}/en`,
                'fr': `${baseUrl}/fr`,
                'es': `${baseUrl}/es`,
                'pt': `${baseUrl}/pt`,
                'x-default': `${baseUrl}/en`,
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
            site: '@CerebrumForex',
            creator: '@CerebrumForex',
            title: titles[locale] || titles.en,
            description: descriptions[locale] || descriptions.en,
            images: [`${baseUrl}/twitter-image.jpg`],
        },
        verification: {
            google: 'your-google-verification-code',
            yandex: 'your-yandex-verification-code',
            bing: 'your-bing-verification-code',
        },
        category: 'finance',
        classification: 'Trading Software',
    };
}

export default async function LocaleLayout({ children, params }) {
    const { locale } = await params;

    if (!locales.includes(locale)) {
        notFound();
    }

    const messages = await getMessages();

    return (
        <html lang={locale}>
            <head>
                {/* Preconnect for performance */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

                {/* Favicon */}
                <link rel="icon" href="/favicon.ico" sizes="any" />
                <link rel="icon" href="/icon.svg" type="image/svg+xml" />
                <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

                {/* PWA Manifest */}
                <link rel="manifest" href="/manifest.json" />
                <meta name="theme-color" content="#00d4ff" />

                {/* Additional SEO */}
                <meta name="format-detection" content="telephone=no" />
                <meta name="mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
            </head>
            <body>
                <NextIntlClientProvider messages={messages}>
                    <SchemaOrg locale={locale} />
                    <Navbar locale={locale} />
                    <main>{children}</main>
                    <Footer locale={locale} />
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
