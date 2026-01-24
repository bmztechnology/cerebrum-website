'use client';

import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import styles from './Profiles.module.css';

export default function Profiles() {
    const { locale } = useParams();
    const t = useTranslations();

    const masterFeatures = t.raw(`${locale}.profiles.master.features`);
    const standardFeatures = t.raw(`${locale}.profiles.standard.features`);
    const manualFeatures = t.raw(`${locale}.profiles.manual.features`);

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>{t(`${locale}.profiles.title`)}</h2>
                    <p className={styles.subtitle}>{t(`${locale}.profiles.subtitle`)}</p>
                </div>

                <div className={styles.grid}>
                    {/* Autonomous Mode - Full Auto */}
                    <div className={`${styles.card} ${styles.master}`}>
                        <div className={styles.badge}>
                            <span className={styles.badgeIcon}>⚡</span>
                            {t(`${locale}.profiles.master.mode`)}
                        </div>
                        <h3 className={styles.cardTitle}>{t(`${locale}.profiles.master.title`)}</h3>
                        <ul className={styles.features}>
                            {masterFeatures.map((feature, index) => (
                                <li key={index} className={styles.feature}>
                                    <span className={styles.checkIcon}>✓</span>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <div className={styles.cardFooter}>
                            <span className={styles.target}>{t(`${locale}.profiles.master.target`)}</span>
                        </div>
                    </div>

                    {/* Assisted Mode - Semi-Auto */}
                    <div className={`${styles.card} ${styles.standard}`}>
                        <div className={styles.badgeSecondary}>
                            <span className={styles.badgeIcon}>🎯</span>
                            {t(`${locale}.profiles.standard.mode`)}
                        </div>
                        <h3 className={styles.cardTitle}>{t(`${locale}.profiles.standard.title`)}</h3>
                        <ul className={styles.features}>
                            {standardFeatures.map((feature, index) => (
                                <li key={index} className={styles.feature}>
                                    <span className={styles.checkIcon}>✓</span>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <div className={styles.cardFooter}>
                            <span className={styles.target}>{t(`${locale}.profiles.standard.target`)}</span>
                        </div>
                    </div>

                    {/* Manual Mode - Full Manual */}
                    <div className={`${styles.card} ${styles.manual}`}>
                        <div className={styles.badgeTertiary}>
                            <span className={styles.badgeIcon}>🖐️</span>
                            {t(`${locale}.profiles.manual.mode`)}
                        </div>
                        <h3 className={styles.cardTitle}>{t(`${locale}.profiles.manual.title`)}</h3>
                        <ul className={styles.features}>
                            {manualFeatures.map((feature, index) => (
                                <li key={index} className={styles.feature}>
                                    <span className={styles.checkIcon}>✓</span>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <div className={styles.cardFooter}>
                            <span className={styles.target}>{t(`${locale}.profiles.manual.target`)}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
