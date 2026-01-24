'use client';

import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import styles from './TradingTools.module.css';

const translations = {
    en: {
        title: 'Live Trading Tools',
        subtitle: 'Real-time market data at your fingertips',
        chart: 'EUR/USD Live Chart',
        calendar: 'Economic Calendar',
        news: 'Breaking News',
        high: 'High Impact',
        medium: 'Medium Impact',
        low: 'Low Impact',
        loading: 'Loading...'
    },
    fr: {
        title: 'Outils de Trading Live',
        subtitle: 'Données de marché en temps réel',
        chart: 'Graphique EUR/USD Live',
        calendar: 'Calendrier Économique',
        news: 'Dernières Nouvelles',
        high: 'Impact Élevé',
        medium: 'Impact Moyen',
        low: 'Impact Faible',
        loading: 'Chargement...'
    },
    es: {
        title: 'Herramientas de Trading en Vivo',
        subtitle: 'Datos de mercado en tiempo real',
        chart: 'Gráfico EUR/USD en Vivo',
        calendar: 'Calendario Económico',
        news: 'Últimas Noticias',
        high: 'Alto Impacto',
        medium: 'Impacto Medio',
        low: 'Bajo Impacto',
        loading: 'Cargando...'
    },
    pt: {
        title: 'Ferramentas de Trading ao Vivo',
        subtitle: 'Dados de mercado em tempo real',
        chart: 'Gráfico EUR/USD ao Vivo',
        calendar: 'Calendário Econômico',
        news: 'Últimas Notícias',
        high: 'Alto Impacto',
        medium: 'Impacto Médio',
        low: 'Baixo Impacto',
        loading: 'Carregando...'
    }
};

// Sample economic events (in production, fetch from API)
const economicEvents = [
    { time: '08:30', currency: 'USD', event: 'Non-Farm Payrolls', impact: 'high', forecast: '180K', previous: '175K' },
    { time: '10:00', currency: 'USD', event: 'ISM Manufacturing PMI', impact: 'high', forecast: '52.5', previous: '51.8' },
    { time: '14:00', currency: 'EUR', event: 'ECB Interest Rate Decision', impact: 'high', forecast: '4.50%', previous: '4.50%' },
    { time: '15:30', currency: 'USD', event: 'Crude Oil Inventories', impact: 'medium', forecast: '-1.2M', previous: '0.8M' },
    { time: '16:00', currency: 'EUR', event: 'Consumer Confidence', impact: 'medium', forecast: '-15.2', previous: '-16.1' }
];

// Sample news (in production, fetch from API)
const breakingNews = [
    { time: '2 min ago', title: 'Fed signals potential rate pause amid economic uncertainty', source: 'Reuters' },
    { time: '15 min ago', title: 'EUR/USD breaks above 1.0850 resistance level', source: 'FXStreet' },
    { time: '32 min ago', title: 'ECB officials hint at data-dependent policy approach', source: 'Bloomberg' },
    { time: '1 hour ago', title: 'US Treasury yields decline on softer inflation data', source: 'CNBC' }
];

export default function TradingTools() {
    const { locale } = useParams();
    const t = translations[locale] || translations.en;
    const [activeTab, setActiveTab] = useState('chart');

    return (
        <section id="tools" className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>{t.title}</h2>
                    <p className={styles.subtitle}>{t.subtitle}</p>
                </div>

                <div className={styles.tabs}>
                    <button
                        className={`${styles.tab} ${activeTab === 'chart' ? styles.active : ''}`}
                        onClick={() => setActiveTab('chart')}
                    >
                        📈 {t.chart}
                    </button>
                    <button
                        className={`${styles.tab} ${activeTab === 'calendar' ? styles.active : ''}`}
                        onClick={() => setActiveTab('calendar')}
                    >
                        📅 {t.calendar}
                    </button>
                    <button
                        className={`${styles.tab} ${activeTab === 'news' ? styles.active : ''}`}
                        onClick={() => setActiveTab('news')}
                    >
                        📰 {t.news}
                    </button>
                </div>

                <div className={styles.content}>
                    {/* TradingView Chart Widget */}
                    {activeTab === 'chart' && (
                        <div className={styles.chartContainer}>
                            <iframe
                                src="https://s.tradingview.com/widgetembed/?frameElementId=tradingview_chart&symbol=FX%3AEURUSD&interval=H1&hidesidetoolbar=0&symboledit=1&saveimage=1&toolbarbg=1a1a25&studies=%5B%5D&theme=dark&style=1&timezone=exchange&withdateranges=1&showpopupbutton=1&studies_overrides=%7B%7D&overrides=%7B%7D&enabled_features=%5B%5D&disabled_features=%5B%5D&locale=en&utm_source=localhost&utm_medium=widget&utm_campaign=chart&utm_term=FX%3AEURUSD"
                                className={styles.chartIframe}
                                allowFullScreen
                            />
                        </div>
                    )}

                    {/* Economic Calendar */}
                    {activeTab === 'calendar' && (
                        <div className={styles.calendar}>
                            <div className={styles.calendarHeader}>
                                <span className={styles.calendarCol}>Time</span>
                                <span className={styles.calendarCol}>Currency</span>
                                <span className={styles.calendarCol}>Event</span>
                                <span className={styles.calendarCol}>Impact</span>
                                <span className={styles.calendarCol}>Forecast</span>
                                <span className={styles.calendarCol}>Previous</span>
                            </div>
                            {economicEvents.map((event, index) => (
                                <div key={index} className={styles.calendarRow}>
                                    <span className={styles.calendarCol}>{event.time}</span>
                                    <span className={styles.calendarCol}>
                                        <span className={styles.currency}>{event.currency}</span>
                                    </span>
                                    <span className={`${styles.calendarCol} ${styles.eventName}`}>{event.event}</span>
                                    <span className={styles.calendarCol}>
                                        <span className={`${styles.impact} ${styles[event.impact]}`}>
                                            {event.impact === 'high' ? '🔴' : event.impact === 'medium' ? '🟠' : '⚪'}
                                        </span>
                                    </span>
                                    <span className={styles.calendarCol}>{event.forecast}</span>
                                    <span className={styles.calendarCol}>{event.previous}</span>
                                </div>
                            ))}
                            <div className={styles.legend}>
                                <span className={styles.legendItem}>🔴 {t.high}</span>
                                <span className={styles.legendItem}>🟠 {t.medium}</span>
                                <span className={styles.legendItem}>⚪ {t.low}</span>
                            </div>
                        </div>
                    )}

                    {/* Breaking News */}
                    {activeTab === 'news' && (
                        <div className={styles.newsFeed}>
                            {breakingNews.map((news, index) => (
                                <div key={index} className={styles.newsItem}>
                                    <div className={styles.newsHeader}>
                                        <span className={styles.newsTime}>{news.time}</span>
                                        <span className={styles.newsSource}>{news.source}</span>
                                    </div>
                                    <p className={styles.newsTitle}>{news.title}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
