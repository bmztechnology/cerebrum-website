'use client';

import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { useState } from 'react';
import styles from './Screenshots.module.css';

const screenshots = [
    { src: '/images/p1.jpg', alt: 'Cerebrum Dashboard' },
    { src: '/images/p2.jpg', alt: 'Trading Interface' },
    { src: '/images/p3.jpg', alt: 'AI Signals' },
    { src: '/images/p4.jpg', alt: 'Configuration' },
    { src: '/images/p5.jpg', alt: 'Performance Metrics' },
    { src: '/images/p6.jpg', alt: 'Risk Management' },
];

export default function Screenshots() {
    const { locale } = useParams();
    const t = useTranslations();
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>{t(`${locale}.screenshots.title`)}</h2>
                    <p className={styles.subtitle}>{t(`${locale}.screenshots.subtitle`)}</p>
                </div>

                <div className={styles.gallery}>
                    <div className={styles.mainImage}>
                        <Image
                            src={screenshots[activeIndex].src}
                            alt={screenshots[activeIndex].alt}
                            fill
                            style={{ objectFit: 'contain' }}
                            className={styles.image}
                        />
                    </div>

                    <div className={styles.thumbnails}>
                        {screenshots.map((screenshot, index) => (
                            <button
                                key={index}
                                className={`${styles.thumbnail} ${index === activeIndex ? styles.active : ''}`}
                                onClick={() => setActiveIndex(index)}
                            >
                                <Image
                                    src={screenshot.src}
                                    alt={screenshot.alt}
                                    fill
                                    style={{ objectFit: 'cover' }}
                                />
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
