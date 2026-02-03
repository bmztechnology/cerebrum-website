'use client';

import { useState, useEffect } from 'react';
import styles from './SectionWrapper.module.css';

export default function SectionWrapper({ children, id }) {
    const [isFullscreen, setIsFullscreen] = useState(false);

    const toggleFullscreen = () => {
        setIsFullscreen(!isFullscreen);
    };

    useEffect(() => {
        if (isFullscreen) {
            document.body.classList.add('fullscreen-active');
        } else {
            document.body.classList.remove('fullscreen-active');
        }
        return () => document.body.classList.remove('fullscreen-active');
    }, [isFullscreen]);

    return (
        <div
            className={`${styles.wrapper} ${isFullscreen ? 'fullscreen-section' : ''}`}
            id={isFullscreen ? undefined : id}
        >
            <div className={styles.controls}>
                <button
                    onClick={toggleFullscreen}
                    className={styles.toggleBtn}
                    title={isFullscreen ? "Réduire" : "Plein écran"}
                    aria-label="Toggle Fullscreen"
                >
                    {isFullscreen ? (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M4 14h6v6M20 10h-6V4M14 10l7-7M10 14l-7 7" />
                        </svg>
                    ) : (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                        </svg>
                    )}
                </button>
            </div>
            <div className={isFullscreen ? styles.fullscreenContent : ''}>
                {children}
            </div>
        </div>
    );
}
