"use client";

import { useEffect, useState } from "react";
import styles from "./Dashboard.module.css";

const SESSIONS = [
    { name: "Sydney", start: 22, end: 7, color: "#10b981" },
    { name: "Tokyo", start: 0, end: 9, color: "#f59e0b" },
    { name: "London", start: 8, end: 17, color: "#3b82f6" },
    { name: "New York", start: 13, end: 22, color: "#ef4444" }
];

export default function MarketWidget() {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [activeSessions, setActiveSessions] = useState([]);

    useEffect(() => {
        const updateSessions = () => {
            const now = new Date();
            setCurrentTime(now);
            const utcHour = now.getUTCHours();
            const utcDay = now.getUTCDay();

            if (utcDay === 0 || utcDay === 6) {
                setActiveSessions([]);
                return;
            }

            const active = SESSIONS.filter(session => {
                if (session.start < session.end) {
                    return utcHour >= session.start && utcHour < session.end;
                } else {
                    return utcHour >= session.start || utcHour < session.end;
                }
            });

            setActiveSessions(active);
        };

        updateSessions();
        const interval = setInterval(updateSessions, 60000);
        return () => clearInterval(interval);
    }, []);

    const utcHour = currentTime.getUTCHours();
    const utcDay = currentTime.getUTCDay();
    const isWeekend = utcDay === 0 || utcDay === 6;

    return (
        <div className={styles.marketCard}>
            <h3 className={styles.widgetTitle}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
                Market Sessions
            </h3>

            <div className={styles.sessionsTimeline}>
                {SESSIONS.map((session, index) => {
                    const isActive = activeSessions.some(s => s.name === session.name);
                    return (
                        <div
                            key={index}
                            className={`${styles.sessionItem} ${isActive ? styles.sessionActive : ''}`}
                            style={{ '--session-color': session.color }}
                        >
                            <div className={styles.sessionIndicator}>
                                <span className={`${styles.sessionDot} ${isActive ? styles.sessionDotActive : ''}`}></span>
                            </div>
                            <div className={styles.sessionInfo}>
                                <span className={styles.sessionName}>{session.name}</span>
                                <span className={styles.sessionTime}>
                                    {session.start}:00 - {session.end}:00 UTC
                                </span>
                            </div>
                            {isActive && <span className={styles.sessionLive}>LIVE</span>}
                        </div>
                    );
                })}
            </div>

            <div className={styles.marketFooter}>
                <div className={styles.utcTime}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                    </svg>
                    {currentTime.toUTCString().slice(17, 25)} UTC
                </div>
                {isWeekend ? (
                    <span className={styles.marketClosed}>Markets Closed (Weekend)</span>
                ) : activeSessions.length > 0 ? (
                    <span className={styles.marketOpen}>{activeSessions.length} Session(s) Active</span>
                ) : (
                    <span className={styles.marketClosed}>Low Activity</span>
                )}
            </div>
        </div>
    );
}
