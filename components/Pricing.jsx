"use client";

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import styles from './Pricing.module.css';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Pricing() {
    const t = useTranslations('pricing');
    const { isSignedIn, user } = useUser();
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const handleCheckout = async (plan) => {
        if (!isSignedIn) {
            router.push('/auth/signup');
            return;
        }

        setLoading(true);
        try {
            const priceId = plan === 'monthly'
                ? process.env.NEXT_PUBLIC_STRIPE_PRICE_MONTHLY
                : process.env.NEXT_PUBLIC_STRIPE_PRICE_YEARLY;

            const res = await fetch('/api/checkout', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    priceId,
                    locale: 'en' // Default to en, ideally get from params or context
                })
            });

            const data = await res.json();
            if (data.url) {
                window.location.href = data.url;
            } else {
                const errorMsg = data.details ? `${data.error}: ${data.details}` : (data.error || 'Unknown error');
                alert('Checkout failed: ' + errorMsg);
            }
        } catch (error) {
            console.error(error);
            alert('An error occurred.');
        } finally {
            setLoading(false);
        }
    };

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
                        <button
                            onClick={() => handleCheckout('monthly')}
                            className={styles.ctaButton}
                            disabled={loading}
                        >
                            {loading ? 'Processing...' : t('monthly.cta')}
                        </button>
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
                        <button
                            onClick={() => handleCheckout('yearly')}
                            className={styles.ctaButton}
                            disabled={loading}
                        >
                            {loading ? 'Processing...' : t('yearly.cta')}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
