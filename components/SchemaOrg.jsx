'use client';

import Script from 'next/script';

// Schema.org JSON-LD for SEO and AI discoverability
export default function SchemaOrg({ locale }) {
    const baseUrl = 'https://cerebrumfx.com';

    const schema = {
        "@context": "https://schema.org",
        "@graph": [
            // Software Application
            {
                "@type": "SoftwareApplication",
                "@id": `${baseUrl}/#software`,
                "name": "Cerebrum Forex",
                "alternateName": "Cerebrum FX AI",
                "operatingSystem": "Windows 10, Windows 11",
                "applicationCategory": "FinanceApplication",
                "applicationSubCategory": "Trading Software",
                "description": locale === 'fr'
                    ? "Logiciel de trading EUR/USD propulsé par IA avec 5 modèles de machine learning, intégration MT5, et signaux en temps réel."
                    : "AI-powered EUR/USD trading software with 5 machine learning models, MT5 integration, and real-time trading signals.",
                "softwareVersion": "1.2",
                "screenshot": `${baseUrl}/images/dashboard.jpg`,
                "featureList": [
                    "XGBoost AI predictions",
                    "LightGBM AI predictions",
                    "RandomForest AI predictions",
                    "CatBoost AI predictions",
                    "Stacking ensemble model",
                    "MetaTrader 5 Expert Advisor integration",
                    "Real-time signal panel",
                    "50+ technical indicators",
                    "Prop firm compatible (FTMO, MFF)",
                    "Multi-timeframe analysis (1M to 4H)",
                    "Risk management tools",
                    "Economic calendar integration"
                ],
                "offers": {
                    "@type": "Offer",
                    "price": "99",
                    "priceCurrency": "USD",
                    "availability": "https://schema.org/InStock"
                },
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.8",
                    "bestRating": "5",
                    "worstRating": "1",
                    "ratingCount": "247"
                },
                "publisher": {
                    "@id": `${baseUrl}/#organization`
                }
            },
            // Organization
            {
                "@type": "Organization",
                "@id": `${baseUrl}/#organization`,
                "name": "Cerebrum Forex",
                "url": baseUrl,
                "logo": {
                    "@type": "ImageObject",
                    "url": `${baseUrl}/logo.png`,
                    "width": 512,
                    "height": 512
                },
                "description": "Creators of AI-powered forex trading software for EUR/USD pairs.",
                "sameAs": [
                    "https://twitter.com/cerebrumfx",
                    "https://youtube.com/@cerebrumfx",
                    "https://discord.gg/cerebrumfx"
                ],
                "contactPoint": {
                    "@type": "ContactPoint",
                    "contactType": "customer support",
                    "email": "support@cerebrumfx.com"
                }
            },
            // WebSite
            {
                "@type": "WebSite",
                "@id": `${baseUrl}/#website`,
                "url": baseUrl,
                "name": "Cerebrum Forex",
                "description": "AI-Powered EUR/USD Trading Software",
                "publisher": {
                    "@id": `${baseUrl}/#organization`
                },
                "inLanguage": ["en", "fr", "es", "pt"],
                "potentialAction": {
                    "@type": "SearchAction",
                    "target": `${baseUrl}/search?q={search_term_string}`,
                    "query-input": "required name=search_term_string"
                }
            },
            // FAQ Page
            {
                "@type": "FAQPage",
                "@id": `${baseUrl}/#faq`,
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "What is Cerebrum Forex?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Cerebrum Forex is an AI-powered trading software that uses 5 machine learning models (XGBoost, LightGBM, RandomForest, CatBoost, and Stacking) to generate EUR/USD trading signals. It integrates with MetaTrader 5 for automated or assisted trading execution."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is Cerebrum Forex compatible with prop firms?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, Cerebrum Forex includes a dedicated Prop Firm mode with risk management rules designed for trading challenges like FTMO, MyForexFunds, and similar prop firms. It includes daily loss limits, max drawdown protection, and news filters."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Does Cerebrum Forex have access to my trading account?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "No, Cerebrum Forex is a software platform that assists traders. It has no access to your account, funds, or bank. The only connection is through MetaTrader 5's API for price data and signal execution via the Expert Advisor."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What timeframes does Cerebrum Forex support?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Cerebrum Forex supports 6 timeframes: 1 Minute (M1), 5 Minutes (M5), 15 Minutes (M15), 30 Minutes (M30), 1 Hour (H1), and 4 Hours (H4). Each timeframe has its own trained AI model."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How accurate are the AI predictions?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Prediction accuracy varies by market conditions and timeframe. The AI models are trained on historical data and use a consensus voting system. Users can view individual model confidence levels and adjust thresholds in the Settings panel."
                        }
                    }
                ]
            },
            // HowTo
            {
                "@type": "HowTo",
                "@id": `${baseUrl}/#howto`,
                "name": "How to Start Trading with Cerebrum Forex",
                "description": "Step-by-step guide to set up and use Cerebrum Forex for AI-powered EUR/USD trading.",
                "step": [
                    {
                        "@type": "HowToStep",
                        "position": 1,
                        "name": "Install MetaTrader 5",
                        "text": "Download MT5 from your broker. Install, login, and keep MT5 running during Cerebrum installation."
                    },
                    {
                        "@type": "HowToStep",
                        "position": 2,
                        "name": "Install Cerebrum Forex",
                        "text": "Run the Cerebrum installer. It will auto-detect your MT5 and deploy the Expert Advisor automatically."
                    },
                    {
                        "@type": "HowToStep",
                        "position": 3,
                        "name": "Extract Historical Data",
                        "text": "Use the Extraction tab to download EUR/USD OHLC data for model training."
                    },
                    {
                        "@type": "HowToStep",
                        "position": 4,
                        "name": "Train AI Models",
                        "text": "Navigate to Training and click 'Smart Train' to train all 5 AI models on your data."
                    },
                    {
                        "@type": "HowToStep",
                        "position": 5,
                        "name": "Deploy Expert Advisor",
                        "text": "In Settings, click 'Install/Deploy EA' to add the Expert Advisor to MT5."
                    },
                    {
                        "@type": "HowToStep",
                        "position": 6,
                        "name": "Start Trading",
                        "text": "Go to the Prediction tab to view real-time AI signals and execute trades via the Signal Panel."
                    }
                ]
            }
        ]
    };

    return (
        <Script
            id="schema-org"
            type="application/ld+json"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
