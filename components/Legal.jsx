'use client';

import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import styles from './Legal.module.css';

export default function Legal() {
    const { locale } = useParams();
    const t = useTranslations();

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.card}>
                    <div className={styles.icon}>⚠️</div>
                    <h3 className={styles.title}>{t(`${locale}.legal.title`)}</h3>
                    <p className={styles.text}>{t(`${locale}.legal.text`)}</p>
                </div>
            </div>
        </section>
    );
}
