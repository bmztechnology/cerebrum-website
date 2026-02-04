'use client';

import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import styles from './Profiles.module.css';

export default function Profiles() {
    const { locale } = useParams();
    const t = useTranslations();

    const masterFeatures = t.raw(`profiles.master.features`);
    const standardFeatures = t.raw(`profiles.standard.features`);
    const manualFeatures = t.raw(`profiles.manual.features`);

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.mainBadge}>{t('profiles.badge')}</span>
                    <h2 className={styles.title}>{t(`profiles.title`)}</h2>
                    <p className={styles.subtitle}>{t(`profiles.subtitle`)}</p>
                </div>

                <div className={styles.grid}>
                    {/* Autonomous Mode - Full Auto */}
                    <div className={`${styles.card} ${styles.master}`}>
                        <div className={styles.badge}>
                            <span className={styles.badgeIcon}>⚡</span>
                            {t(`profiles.master.mode`)}
                        </div>
                        <h3 className={styles.cardTitle}>{t(`profiles.master.title`)}</h3>
                        <ul className={styles.features}>
                            {masterFeatures.map((feature, index) => (
                                <li key={index} className={styles.feature}>
                                    <span className={styles.checkIcon}>✓</span>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <div className={styles.cardFooter}>
                            <span className={styles.target}>{t(`profiles.master.target`)}</span>
                        </div>
                    </div>

                    {/* Assisted Mode - Semi-Auto */}
                    <div className={`${styles.card} ${styles.standard}`}>
                        <div className={styles.badgeSecondary}>
                            <span className={styles.badgeIcon}>🎯</span>
                            {t(`profiles.standard.mode`)}
                        </div>
                        <h3 className={styles.cardTitle}>{t(`profiles.standard.title`)}</h3>
                        <ul className={styles.features}>
                            {standardFeatures.map((feature, index) => (
                                <li key={index} className={styles.feature}>
                                    <span className={styles.checkIcon}>✓</span>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <div className={styles.cardFooter}>
                            <span className={styles.target}>{t(`profiles.standard.target`)}</span>
                        </div>
                    </div>

                    {/* Manual Mode - Full Manual */}
                    <div className={`${styles.card} ${styles.manual}`}>
                        <div className={styles.badgeTertiary}>
                            <span className={styles.badgeIcon}>🖐️</span>
                            {t(`profiles.manual.mode`)}
                        </div>
                        <h3 className={styles.cardTitle}>{t(`profiles.manual.title`)}</h3>
                        <ul className={styles.features}>
                            {manualFeatures.map((feature, index) => (
                                <li key={index} className={styles.feature}>
                                    <span className={styles.checkIcon}>✓</span>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <div className={styles.cardFooter}>
                            <span className={styles.target}>{t(`profiles.manual.target`)}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
