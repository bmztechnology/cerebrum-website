'use client';

import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
    const { locale } = useParams();
    const t = useTranslations();
    const year = new Date().getFullYear();

    const quickLinks = [
        { key: 'home', href: `/${locale}` },
        { key: 'features', href: `/${locale}#architecture` },
        { key: 'tools', href: `/${locale}#tools` },
        { key: 'contact', href: `/${locale}#contact` },
        { key: 'download', href: `/${locale}#download` }
    ];

    const resources = [
        { label: 'Documentation', href: '/docs/index.html' },
        { label: 'User Manual', href: '/docs/user_manual.html' },
        { label: 'EA Specs', href: '/docs/EA_SPECS.html' },
        { label: 'Troubleshooting', href: '/docs/TROUBLESHOOTING.html' }
    ];

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                {/* Main Footer Content */}
                <div className={styles.grid}>
                    {/* Brand Column */}
                    <div className={styles.brandColumn}>
                        <div className={styles.brand}>
                            <Image
                                src="/assets/logo.jpg"
                                alt="Cerebrum Forex"
                                width={40}
                                height={40}
                                className={styles.logoImage}
                            />
                            <span className={styles.logoText}>
                                Cerebrum<span className={styles.logoAccent}>Forex</span>
                            </span>
                        </div>
                        <p className={styles.brandDescription}>
                            AI-powered hybrid trading solution for precision EUR/USD scalping.
                            Combining machine learning with professional MT5 execution.
                        </p>
                        <div className={styles.stats}>
                            <div className={styles.stat}>
                                <span className={styles.statValue}>EUR/USD</span>
                                <span className={styles.statLabel}>Optimized</span>
                            </div>
                            <div className={styles.stat}>
                                <span className={styles.statValue}>6</span>
                                <span className={styles.statLabel}>Timeframes</span>
                            </div>
                            <div className={styles.stat}>
                                <span className={styles.statValue}>5</span>
                                <span className={styles.statLabel}>AI Models</span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className={styles.linksColumn}>
                        <h4 className={styles.columnTitle}>Quick Links</h4>
                        <ul className={styles.linksList}>
                            {quickLinks.map((link) => (
                                <li key={link.key}>
                                    <Link href={link.href} className={styles.link}>
                                        {t(`${locale}.nav.${link.key}`)}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources */}
                    <div className={styles.linksColumn}>
                        <h4 className={styles.columnTitle}>Resources</h4>
                        <ul className={styles.linksList}>
                            {resources.map((link, index) => (
                                <li key={index}>
                                    <a href={link.href} className={styles.link}>
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Trading Info */}
                    <div className={styles.linksColumn}>
                        <h4 className={styles.columnTitle}>Trading</h4>
                        <ul className={styles.linksList}>
                            <li className={styles.infoItem}>
                                <span className={styles.infoLabel}>Platform</span>
                                <span className={styles.infoValue}>MetaTrader 5</span>
                            </li>
                            <li className={styles.infoItem}>
                                <span className={styles.infoLabel}>Pair</span>
                                <span className={styles.infoValue}>EUR/USD</span>
                            </li>
                            <li className={styles.infoItem}>
                                <span className={styles.infoLabel}>Compatibility</span>
                                <span className={styles.infoValue}>Real, Demo, Prop Firms</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Legal Disclaimer */}
                <div className={styles.disclaimer}>
                    <p>{t(`${locale}.legal.text`)}</p>
                </div>

                {/* Bottom Bar */}
                <div className={styles.bottom}>
                    <p className={styles.copyright}>
                        © {year} Cerebrum Forex. {t(`${locale}.footer.rights`)}
                    </p>
                    <div className={styles.bottomLinks}>
                        <span className={styles.bottomLink}>Privacy Policy</span>
                        <span className={styles.bottomDivider}>•</span>
                        <span className={styles.bottomLink}>Terms of Service</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
