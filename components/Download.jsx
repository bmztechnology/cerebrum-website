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

                        <div className={styles.pricing}>
                            <span className={styles.price}>{t('download.price')}</span>
                            <span className={styles.secure}>{t('download.via')}</span>
                        </div>

                        <a href={`/${locale}/pricing`} className={styles.downloadBtn}>
                            <span className={styles.btnIcon}>📥</span>
                            {t('download.button')}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
