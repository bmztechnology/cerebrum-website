'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import styles from './MarketStatus.module.css';

export default function MarketStatus() {
    const { locale } = useParams();
    const t = useTranslations();
    const [mounted, setMounted] = useState(false);
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        setMounted(true);
        const timer = setInterval(() => setCurrentTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    // Market sessions in UTC
    const sessions = [
        {
            name: 'Sydney',
            emoji: '🇦🇺',
            openHour: 21, // 21:00 UTC (previous day)
            closeHour: 6,  // 06:00 UTC
            overnight: true
        },
        {
            name: 'Tokyo',
            emoji: '🇯🇵',
            openHour: 0,   // 00:00 UTC
            closeHour: 9,  // 09:00 UTC
            overnight: false
        },
        {
            name: 'London',
            emoji: '🇬🇧',
            openHour: 7,   // 07:00 UTC
            closeHour: 16, // 16:00 UTC
            overnight: false
        },
        {
            name: 'New York',
            emoji: '🇺🇸',
            openHour: 12,  // 12:00 UTC
            closeHour: 21, // 21:00 UTC
            overnight: false
        }
    ];

    const isSessionOpen = (session) => {
        const utcHour = currentTime.getUTCHours();
        if (session.overnight) {
            return utcHour >= session.openHour || utcHour < session.closeHour;
        }
        return utcHour >= session.openHour && utcHour < session.closeHour;
    };

    const getActiveSessionName = () => {
        const openSessions = sessions.filter(isSessionOpen);
        if (openSessions.length === 0) return 'Weekend';
        if (openSessions.length >= 2) return openSessions.map(s => s.name).join(' & ');
        return openSessions[0].name;
    };

    const isWeekend = () => {
        const day = currentTime.getUTCDay();
        const hour = currentTime.getUTCHours();
        // Market closed from Friday 21:00 UTC to Sunday 21:00 UTC
        if (day === 6) return true; // Saturday
        if (day === 0 && hour < 21) return true; // Sunday before 21:00
        if (day === 5 && hour >= 21) return true; // Friday after 21:00
        return false;
    };

    const formatTime = (date) => {
        return date.toUTCString().slice(17, 25) + ' UTC';
    };

    const titles = {
        en: 'Forex Market Status',
        fr: 'Statut du Marché Forex',
        es: 'Estado del Mercado Forex',
        pt: 'Status do Mercado Forex'
    };

    const weekendText = {
        en: 'Markets Closed',
        fr: 'Marchés Fermés',
        es: 'Mercados Cerrados',
        pt: 'Mercados Fechados'
    };

    if (!mounted) {
        return (
            <section className={styles.section} id="market-status">
                <div className={styles.container}>
                    <div className={styles.header}>
                        <h3 className={styles.title}>{titles[locale] || titles.en}</h3>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className={styles.section} id="market-status">
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.liveIndicator}>
                        <span className={styles.liveDot}></span>
                        LIVE
                    </span>
                    <h3 className={styles.title}>{titles[locale] || titles.en}</h3>
                    <span className={styles.time}>{formatTime(currentTime)}</span>
                </div>

                {isWeekend() ? (
                    <div className={styles.weekendBanner}>
                        <span className={styles.weekendIcon}>🌙</span>
                        <span>{weekendText[locale] || weekendText.en}</span>
                    </div>
                ) : (
                    <>
                        <div className={styles.activeSession}>
                            <span className={styles.sessionLabel}>Active Session:</span>
                            <span className={styles.sessionName}>{getActiveSessionName()}</span>
                        </div>

                        <div className={styles.sessionsGrid}>
                            {sessions.map((session) => (
                                <div
                                    key={session.name}
                                    className={`${styles.sessionCard} ${isSessionOpen(session) ? styles.open : styles.closed}`}
                                >
                                    <span className={styles.sessionEmoji}>{session.emoji}</span>
                                    <span className={styles.sessionTitle}>{session.name}</span>
                                    <span className={styles.sessionStatus}>
                                        {isSessionOpen(session) ? (
                                            <>
                                                <span className={styles.openDot}></span>
                                                Open
                                            </>
                                        ) : (
                                            <>
                                                <span className={styles.closedDot}></span>
                                                Closed
                                            </>
                                        )}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </>
                )}

                <div className={styles.tradingPair}>
                    <span className={styles.pairLabel}>Trading Pair:</span>
                    <span className={styles.pairValue}>EUR/USD</span>
                    <span className={styles.pairBadge}>Exclusive</span>
                </div>
            </div>
        </section>
    );
}
