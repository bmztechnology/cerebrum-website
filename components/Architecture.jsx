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
                    <h2 className={styles.title}>{t(`${locale}.architecture.title`)}</h2>
                    <p className={styles.subtitle}>{t(`${locale}.architecture.subtitle`)}</p>
                </div>

                <div className={styles.grid}>
                    <div className={styles.card}>
                        <div className={styles.iconWrapper}>
                            <div className={styles.iconAI}>
                                <svg viewBox="0 0 24 24" width="32" height="32">
                                    <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                                </svg>
                            </div>
                        </div>
                        <h3 className={styles.cardTitle}>{t(`${locale}.architecture.ai.title`)}</h3>
                        <p className={styles.cardText}>{t(`${locale}.architecture.ai.description`)}</p>
                        <div className={styles.features}>
                            <span className={styles.feature}>Machine Learning</span>
                            <span className={styles.feature}>Pattern Recognition</span>
                            <span className={styles.feature}>Confidence Scoring</span>
                        </div>
                    </div>

                    <div className={styles.connector}>
                        <div className={styles.connectorLine}></div>
                        <div className={styles.connectorArrow}>
                            <svg viewBox="0 0 24 24" width="24" height="24">
                                <path fill="currentColor" d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z" />
                            </svg>
                        </div>
                        <div className={styles.connectorLine}></div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.iconWrapper}>
                            <div className={styles.iconEA}>
                                <svg viewBox="0 0 24 24" width="32" height="32">
                                    <path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 15.5h-1.5V14h-1v3H8v-3H7v4.5H5.5v-5c0-.55.45-1 1-1H11c.55 0 1 .45 1 1v5zm3.5 0H14v-6h3.5c.55 0 1 .45 1 1V16c0 .55-.45 1-1 1h-2v1.5zm0-2.5h1.5v-1.5H15.5V16z" />
                                </svg>
                            </div>
                        </div>
                        <h3 className={styles.cardTitle}>{t(`${locale}.architecture.ea.title`)}</h3>
                        <p className={styles.cardText}>{t(`${locale}.architecture.ea.description`)}</p>
                        <div className={styles.features}>
                            <span className={styles.feature}>Ultra-Fast Execution</span>
                            <span className={styles.feature}>Risk Management</span>
                            <span className={styles.feature}>Prop Firm Ready</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
