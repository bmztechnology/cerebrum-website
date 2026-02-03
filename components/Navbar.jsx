"use client";

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

const localeFlags = {
    en: 'EN',
    fr: 'FR',
    es: 'ES',
    pt: 'PT'
};

const localeNames = {
    en: 'English',
    fr: 'Français',
    es: 'Español',
    pt: 'Português'
};

import { useUser, SignOutButton } from "@clerk/nextjs";

export default function Navbar({ locale }) {
    const { isSignedIn, isLoaded } = useUser();
    const t = useTranslations();
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLangOpen, setIsLangOpen] = useState(false);
    const [activeHash, setActiveHash] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['features', 'tools', 'pricing', 'faq', 'contact'];
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const top = element.offsetTop;
                    const height = element.offsetHeight;
                    if (scrollPosition >= top && scrollPosition < top + height) {
                        setActiveHash(`#${section}`);
                        return;
                    }
                }
            }

            if (window.scrollY < 500) {
                setActiveHash('');
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Initial check
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { key: 'home', href: `/${locale}` },
        { key: 'academy', href: `/${locale}/academy/courses` },
        { key: 'features', href: `/${locale}#features` },
        { key: 'tools', href: `/${locale}#tools` },
        { key: 'download', href: `/${locale}/download` },
        { key: 'pricing', href: `/${locale}#pricing` },
        { key: 'faq', href: `/${locale}#faq` },
        { key: 'docs', href: '/docs/index.html', external: true },
        { key: 'contact', href: `/${locale}#contact` },
    ];

    const isActive = (item) => {
        if (item.external) return false;

        // Exact page match
        if (pathname === item.href) return true;

        // Homepage with hash match
        if (pathname === `/${locale}` || pathname === `/${locale}/`) {
            if (item.key === 'home' && activeHash === '') return true;
            if (item.href.includes('#') && item.href.endsWith(activeHash) && activeHash !== '') return true;
        }

        // Sub-pages match (e.g. Academy)
        if (item.key === 'academy' && pathname.includes('/academy')) return true;

        return false;
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <Link href={`/${locale}`} className={styles.logo}>
                    <Image
                        src="/assets/logo.jpg"
                        alt="Cerebrum Forex"
                        width={50}
                        height={50}
                        className={styles.logoImage}
                    />
                    <span className={styles.logoText}>Cerebrum<span className={styles.logoAccent}>Forex</span></span>
                </Link>

                <div className={`${styles.navLinks} ${isMenuOpen ? styles.open : ''}`}>
                    {navItems.map((item) => {
                        const active = isActive(item);
                        return item.key === 'home' ? (
                            <Link
                                key={item.key}
                                href={item.href}
                                className={`${styles.navLink} ${active ? styles.active : ''}`}
                                onClick={(e) => {
                                    setIsMenuOpen(false);
                                    if (pathname === item.href || pathname === `/${locale}`) {
                                        e.preventDefault();
                                        window.scrollTo({ top: 0, behavior: 'smooth' });
                                    }
                                }}
                            >
                                {t(`nav.${item.key}`)}
                            </Link>
                        ) : item.external ? (
                            <a
                                key={item.key}
                                href={item.href}
                                className={`${styles.navLink} ${active ? styles.active : ''}`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {t(`nav.${item.key}`)}
                            </a>
                        ) : (
                            <Link
                                key={item.key}
                                href={item.href}
                                className={`${styles.navLink} ${active ? styles.active : ''}`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {t(`nav.${item.key}`)}
                            </Link>
                        );
                    })}
                </div>

                <div className={styles.actions}>
                    <div className={styles.langSelector}>
                        <button
                            className={styles.langButton}
                            onClick={() => setIsLangOpen(!isLangOpen)}
                        >
                            <span>{localeFlags[locale]}</span>
                            <svg className={styles.chevron} viewBox="0 0 24 24" width="16" height="16">
                                <path fill="currentColor" d="M7 10l5 5 5-5z" />
                            </svg>
                        </button>
                        {isLangOpen && (
                            <div className={styles.langDropdown}>
                                {Object.keys(localeFlags).map((loc) => (
                                    <Link
                                        key={loc}
                                        href={`/${loc}`}
                                        className={`${styles.langOption} ${loc === locale ? styles.active : ''}`}
                                        onClick={() => setIsLangOpen(false)}
                                    >
                                        <span>{localeFlags[loc]}</span>
                                        <span>{localeNames[loc]}</span>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className={styles.authActions}>
                        {isLoaded && isSignedIn ? (
                            <div className={styles.userActions}>
                                <Link href={`/${locale}/dashboard`} className={styles.dashboardBtn}>
                                    Dashboard
                                </Link>
                                <SignOutButton>
                                    <button className={styles.logoutBtn}>
                                        Logout
                                    </button>
                                </SignOutButton>
                            </div>
                        ) : isLoaded ? (
                            <Link href={`/${locale}/auth/login`} className={styles.loginBtn}>
                                Login
                            </Link>
                        ) : (
                            <div className={styles.skeleton}></div>
                        )}
                    </div>

                    <button
                        className={styles.menuToggle}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
        </nav>
    );
}
