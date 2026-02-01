'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import styles from './LiveSignalDemo.module.css';

const MOCK_LOGS = [
    { time: '14:32', action: 'TP Hit', profit: '+12.5 pips', type: 'buy' },
    { time: '14:15', action: 'Entry BUY', profit: 'Running', type: 'buy' },
    { time: '13:45', action: 'Signal Filtered', profit: '-', type: 'neutral' },
    { time: '12:20', action: 'TP Hit', profit: '+8.2 pips', type: 'sell' },
    { time: '12:10', action: 'Entry SELL', profit: 'Running', type: 'sell' },
];

const SIGNALS = [
    { type: 'neutral', confidence: 45, models: [true, false, true, false, false] },
    { type: 'buy', confidence: 82, models: [true, true, true, true, false] },
    { type: 'buy', confidence: 94, models: [true, true, true, true, true] },
    { type: 'neutral', confidence: 60, models: [true, true, false, true, false] },
    { type: 'sell', confidence: 78, models: [false, false, true, true, true] },
    { type: 'sell', confidence: 88, models: [true, true, true, true, true] },
];

export default function LiveSignalDemo() {
    const t = useTranslations('liveDemo');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentSignal, setCurrentSignal] = useState(SIGNALS[0]);
    const [logs, setLogs] = useState(MOCK_LOGS);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => {
                const next = (prev + 1) % SIGNALS.length;
                setCurrentSignal(SIGNALS[next]);

                // Occasionally add a log entry for "liveness"
                if (SIGNALS[next].type !== 'neutral' && Math.random() > 0.6) {
                    addLog(SIGNALS[next].type);
                }

                return next;
            });
        }, 3000); // Change signal every 3 seconds

        return () => clearInterval(interval);
    }, []);

    const addLog = (type) => {
        const now = new Date();
        const time = `${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')}`;
        const newLog = {
            time,
            action: `Entry ${type.toUpperCase()}`,
            profit: t('analyzing'),
            type: type
        };
        setLogs(prev => [newLog, ...prev.slice(0, 4)]);
    };

    return (
        <section className={styles.container}>
            <div className={`container ${styles.demoBox}`}>
                <div className={styles.header}>
                    <div className={styles.headerTitle}>
                        <span>🤖</span> {t('headerTitle')}
                    </div>
                    <div className={styles.liveIndicator}>
                        <div className={styles.liveDot}></div>
                        {t('liveIndicator')}
                    </div>
                </div>

                <div className={styles.content}>
                    {/* Signal Visualizer */}
                    <div className={styles.signalCard}>
                        <div className={styles.pair}>{t('pair')}</div>

                        <div className={`${styles.signalType} ${styles[currentSignal.type]}`}>
                            {t(currentSignal.type)}
                        </div>

                        <div className={styles.confidence}>
                            <div className={styles.confidenceLabel}>
                                <span>{t('confidence')}</span>
                                <span>{currentSignal.confidence}%</span>
                            </div>
                            <div className={styles.progressBar}>
                                <div
                                    className={styles.progressFill}
                                    style={{ width: `${currentSignal.confidence}%` }}
                                ></div>
                            </div>
                        </div>

                        <div className={styles.modelsGrid}>
                            {currentSignal.models.map((active, i) => (
                                <div key={i} className={`${styles.model} ${active ? styles.active : ''}`}>
                                    <div className={styles.modelDot}></div>
                                    <span>M{i + 1}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Activity Log */}
                    <div className={styles.logContainer}>
                        <div className={styles.logTitle}>
                            <span>{t('recentActivity')}</span>
                            <span>P/L: +20.7 Pips</span>
                        </div>
                        <div className={styles.logEntries}>
                            {logs.map((log, i) => (
                                <div key={i} className={`${styles.logEntry} ${styles[`log-${log.type}`]}`}>
                                    <span className={styles.logTime}>{log.time}</span>
                                    <span className={styles.logAction}>{log.action}</span>
                                    <span className={styles.logProfit}>{log.profit}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
