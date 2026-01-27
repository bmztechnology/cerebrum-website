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
                        <h2 className={styles.title}>{t('download.title')}</h2>
                        <p className={styles.subtitle}>{t('download.subtitle')}</p>

                        <a href={`/${locale}/pricing`} className={styles.button}>
                            <span className={styles.buttonText}>{t('download.button')}</span>
                            <span className={styles.arrow}>→</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
