"use client";

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import styles from './Pricing.module.css';

export default function Pricing() {
    const t = useTranslations('pricing');

    return (
        <section className={styles.section} id="pricing">
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.badge}>{t('title')}</span>
                    <h2 className={styles.title}>{t('title')}</h2>
                    <p className={styles.subtitle}>{t('subtitle')}</p>
                </div>

                <div className={styles.grid}>
                    {/* MONTHLY PLAN */}
                    <div className={styles.card}>
                        <h3 className={styles.cardTitle}>{t('monthly.title')}</h3>
                        <div className={styles.priceWrapper}>
                            <span className={styles.price}>{t('monthly.price')}</span>
                            <span className={styles.period}>{t('monthly.period')}</span>
                        </div>
                        <div className={styles.features}>
                            <div className={styles.feature}>
                                <span className={styles.check}>✓</span> {t('monthly.features.0')}
                            </div>
                            <div className={styles.feature}>
                                <span className={styles.check}>✓</span> {t('monthly.features.1')}
                            </div>
                            <div className={styles.feature}>
                                <span className={styles.check}>✓</span> {t('monthly.features.2')}
                            </div>
                            <div className={styles.feature}>
                                <span className={styles.check}>✓</span> {t('monthly.features.3')}
                            </div>
                        </div>
                        <Link href="/auth/signup?plan=monthly" className={styles.ctaButton}>
                            {t('monthly.cta')}
                        </Link>
                    </div>

                    {/* YEARLY PLAN (POPULAR) */}
                    <div className={`${styles.card} ${styles.popular}`}>
                        <div className={styles.popularBadge}>Best Value</div>
                        <h3 className={styles.cardTitle}>{t('yearly.title')}</h3>
                        <div className={styles.priceWrapper}>
                            <span className={styles.price}>{t('yearly.price')}</span>
                            <span className={styles.period}>{t('yearly.period')}</span>
                        </div>
                        <div className={styles.features}>
                            <div className={styles.feature}>
                                <span className={styles.check}>✓</span> {t('yearly.features.0')}
                            </div>
                            <div className={styles.feature}>
                                <span className={styles.check}>✓</span> {t('yearly.features.1')}
                            </div>
                            <div className={styles.feature}>
                                <span className={styles.check}>✓</span> {t('yearly.features.2')}
                            </div>
                            <div className={styles.feature}>
                                <span className={styles.check}>✓</span> {t('yearly.features.3')}
                            </div>
                        </div>
                        <Link href="/auth/signup?plan=yearly" className={styles.ctaButton}>
                            {t('yearly.cta')}
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
