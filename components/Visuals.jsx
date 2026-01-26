'use client';

import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import styles from './Visuals.module.css';

export default function Visuals() {
    const { locale } = useParams();
    const t = useTranslations();

    const features = t.raw('visuals.features');

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>{t('visuals.title')}</h2>
                    <p className={styles.subtitle}>{t('visuals.subtitle')}</p>
                </div>

                <div className={styles.grid}>
                    {features.map((feature, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.iconWrapper}>
                                <span className={styles.icon}>
                                    {index === 0 && '🎨'}
                                    {index === 1 && '📊'}
                                    {index === 2 && '🎯'}
                                    {index === 3 && '📈'}
                                </span>
                            </div>
                            <p className={styles.featureText}>{feature}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
