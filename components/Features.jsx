'use client';

import { useParams } from 'next/navigation';
import styles from './Features.module.css';

export default function Features() {
    const { locale } = useParams();

    const titles = {
        en: 'Powerful Features',
        fr: 'Fonctionnalités Puissantes',
        es: 'Características Poderosas',
        pt: 'Recursos Poderosos'
    };

    const badgeTitles = {
        en: 'Technology',
        fr: 'Technologie',
        es: 'Tecnología',
        pt: 'Tecnologia'
    };

    const subtitles = {
        en: 'Everything you need for professional EUR/USD trading',
        fr: 'Tout ce dont vous avez besoin pour trader EUR/USD professionnellement',
        es: 'Todo lo que necesita para operar EUR/USD profesionalmente',
        pt: 'Tudo que você precisa para negociar EUR/USD profissionalmente'
    };

    const features = [
        {
            icon: '🧠',
            titleKey: 'ai',
            titles: {
                en: '5 AI Models',
                fr: '5 Modèles IA',
                es: '5 Modelos IA',
                pt: '5 Modelos IA'
            },
            descriptions: {
                en: 'XGBoost, LightGBM, RandomForest, CatBoost, and Stacking ensemble for maximum accuracy.',
                fr: 'XGBoost, LightGBM, RandomForest, CatBoost et Stacking ensemble pour une précision maximale.',
                es: 'XGBoost, LightGBM, RandomForest, CatBoost y Stacking ensemble para máxima precisión.',
                pt: 'XGBoost, LightGBM, RandomForest, CatBoost e Stacking ensemble para máxima precisão.'
            }
        },
        {
            icon: '📊',
            titleKey: 'indicators',
            titles: {
                en: '50+ Technical Indicators',
                fr: '50+ Indicateurs Techniques',
                es: '50+ Indicadores Técnicos',
                pt: '50+ Indicadores Técnicos'
            },
            descriptions: {
                en: 'EMA, SMA, RSI, MACD, ATR, Bollinger Bands, Ichimoku, and many more built-in.',
                fr: 'EMA, SMA, RSI, MACD, ATR, Bandes de Bollinger, Ichimoku, et bien plus intégrés.',
                es: 'EMA, SMA, RSI, MACD, ATR, Bandas de Bollinger, Ichimoku, y muchos más integrados.',
                pt: 'EMA, SMA, RSI, MACD, ATR, Bandas de Bollinger, Ichimoku, e muito mais integrados.'
            }
        },
        {
            icon: '⚡',
            titleKey: 'ea',
            titles: {
                en: 'MT5 Expert Advisor',
                fr: 'Expert Advisor MT5',
                es: 'Expert Advisor MT5',
                pt: 'Expert Advisor MT5'
            },
            descriptions: {
                en: 'Ultra-fast order execution, trailing stop, break-even, and full risk management integration.',
                fr: 'Exécution ultra-rapide, trailing stop, break-even, et gestion du risque intégrée.',
                es: 'Ejecución ultra-rápida, trailing stop, break-even, y gestión de riesgo integrada.',
                pt: 'Execução ultra-rápida, trailing stop, break-even, e gestão de risco integrada.'
            }
        },
        {
            icon: '🛡️',
            titleKey: 'propfirm',
            titles: {
                en: 'Prop Firm Compatible',
                fr: 'Compatible Prop Firms',
                es: 'Compatible Prop Firms',
                pt: 'Compatível Prop Firms'
            },
            descriptions: {
                en: 'FTMO, MyForexFunds, and more. Built-in daily loss limits, max drawdown, and news filters.',
                fr: 'FTMO, MyForexFunds, et plus. Limites de perte journalière, drawdown max, et filtres news.',
                es: 'FTMO, MyForexFunds, y más. Límites de pérdida diaria, drawdown máximo, y filtros de noticias.',
                pt: 'FTMO, MyForexFunds, e mais. Limites de perda diária, drawdown máximo, e filtros de notícias.'
            }
        },
        {
            icon: '📈',
            titleKey: 'signals',
            titles: {
                en: 'Real-Time Signal Panel',
                fr: 'Panel de Signaux Temps Réel',
                es: 'Panel de Señales en Tiempo Real',
                pt: 'Painel de Sinais em Tempo Real'
            },
            descriptions: {
                en: 'BUY/SELL/NEUTRAL signals with confidence levels, model breakdown, and regime detection.',
                fr: 'Signaux ACHAT/VENTE/NEUTRE avec niveaux de confiance, détail des modèles, et détection de régime.',
                es: 'Señales de COMPRA/VENTA/NEUTRAL con niveles de confianza, desglose de modelos y detección de régimen.',
                pt: 'Sinais de COMPRA/VENDA/NEUTRAL com níveis de confiança, detalhamento de modelos e detecção de regime.'
            }
        },
        {
            icon: '🕐',
            titleKey: 'timeframes',
            titles: {
                en: '6 Timeframes',
                fr: '6 Timeframes',
                es: '6 Timeframes',
                pt: '6 Timeframes'
            },
            descriptions: {
                en: 'M1, M5, M15, M30, H1, H4 - each with its own trained AI model for multi-timeframe analysis.',
                fr: 'M1, M5, M15, M30, H1, H4 - chacun avec son propre modèle IA pour analyse multi-timeframe.',
                es: 'M1, M5, M15, M30, H1, H4 - cada uno con su propio modelo IA para análisis multi-timeframe.',
                pt: 'M1, M5, M15, M30, H1, H4 - cada um com seu próprio modelo IA para análise multi-timeframe.'
            }
        },
        {
            icon: '🎯',
            titleKey: 'logic',
            titles: {
                en: 'Logic Tuning',
                fr: 'Logic Tuning',
                es: 'Logic Tuning',
                pt: 'Logic Tuning'
            },
            descriptions: {
                en: 'Balanced, Opportunist, Guardian presets. Adjust voting weights and confidence thresholds.',
                fr: 'Presets Balanced, Opportunist, Guardian. Ajustez les poids de vote et seuils de confiance.',
                es: 'Presets Balanced, Opportunist, Guardian. Ajuste pesos de votación y umbrales de confianza.',
                pt: 'Presets Balanced, Opportunist, Guardian. Ajuste pesos de votação e limiares de confiança.'
            }
        },
        {
            icon: '📅',
            titleKey: 'calendar',
            titles: {
                en: 'Economic Calendar',
                fr: 'Calendrier Économique',
                es: 'Calendario Económico',
                pt: 'Calendário Econômico'
            },
            descriptions: {
                en: 'Integrated high-impact event tracking for EUR and USD with automatic trading pauses.',
                fr: 'Suivi intégré des événements à fort impact EUR/USD avec pauses de trading automatiques.',
                es: 'Seguimiento integrado de eventos de alto impacto EUR/USD con pausas de trading automáticas.',
                pt: 'Rastreamento integrado de eventos de alto impacto EUR/USD com pausas de trading automáticas.'
            }
        }
    ];

    return (
        <section className={styles.section} id="features">
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.badge}>{badgeTitles[locale] || badgeTitles.en}</span>
                    <h2 className={styles.title}>{titles[locale] || titles.en}</h2>
                    <p className={styles.subtitle}>{subtitles[locale] || subtitles.en}</p>
                </div>

                <div className={styles.grid}>
                    {features.map((feature, index) => (
                        <article key={index} className={styles.card}>
                            <span className={styles.icon}>{feature.icon}</span>
                            <h3 className={styles.cardTitle}>
                                {feature.titles[locale] || feature.titles.en}
                            </h3>
                            <p className={styles.cardDescription}>
                                {feature.descriptions[locale] || feature.descriptions.en}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
