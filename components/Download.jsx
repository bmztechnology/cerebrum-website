'use client';

import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import styles from './Download.module.css';

export default function Download() {
    const { locale } = useParams();
    const t = useTranslations();

    return (
        <section id="download" className={styles.section}>
            <div className={styles.container}>
                <div className={styles.card}>
                    <div className={styles.glow}></div>
                    <div className={styles.content}>
                        <h2 className={styles.title}>{t(`${locale}.download.title`)}</h2>
                        <p className={styles.subtitle}>{t(`${locale}.download.subtitle`)}</p>

                        <a
                            href="#download"
                            className={styles.button}
                        >
                            <span className={styles.buttonText}>{t(`${locale}.download.button`)}</span>
                            <svg className={styles.arrow} viewBox="0 0 24 24" width="24" height="24">
                                <path fill="currentColor" d="M5 12h14m-6-6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
