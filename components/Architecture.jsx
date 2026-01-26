'use client';

import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import styles from './Architecture.module.css';

export default function Architecture() {
    const { locale } = useParams();
    const t = useTranslations();

    return (
        <section id="architecture" className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>{t('architecture.title')}</h2>
                    <p className={styles.subtitle}>{t('architecture.subtitle')}</p>
                </div>

                <div className={styles.grid}>
                    {/* AI Discovery Side */}
                    <div className={styles.card}>
                        <div className={styles.iconWrapper}>
                            <div className={styles.iconAI}>
                                <svg viewBox="0 0 24 24" width="32" height="32">
                                    <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                                </svg>
                            </div>
                        </div>
                        <h3 className={styles.cardTitle}>{t('architecture.ai.title')}</h3>
                        <p className={styles.cardText}>{t('architecture.ai.description')}</p>
                        <div className={styles.features}>
                            <span className={styles.feature}>Machine Learning</span>
                            <span className={styles.feature}>Pattern Recognition</span>
                            <span className={styles.feature}>Predictive Analysis</span>
                        </div>
                    </div>

                    <div className={styles.connector}>
                        <div className={styles.connectorLine}></div>
                        <div className={styles.connectorArrow}>
                            <svg viewBox="0 0 24 24" width="24" height="24">
                                <path fill="currentColor" d="M5 12h14m-6-6l6 6-6 6" />
                            </svg>
                        </div>
                    </div>

                    {/* EA Execution Side */}
                    <div className={styles.card}>
                        <div className={styles.iconWrapper}>
                            <div className={styles.iconEA}>
                                <svg viewBox="0 0 24 24" width="32" height="32">
                                    <path fill="currentColor" d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.21.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" />
                                </svg>
                            </div>
                        </div>
                        <h3 className={styles.cardTitle}>{t('architecture.ea.title')}</h3>
                        <p className={styles.cardText}>{t('architecture.ea.description')}</p>
                        <div className={styles.features}>
                            <span className={styles.feature}>High-Speed Execution</span>
                            <span className={styles.feature}>Risk Protection</span>
                            <span className={styles.feature}>MetaTrader 5 Native</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
