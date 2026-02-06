"use client";

import { useEffect, useRef } from "react";
import styles from "./Dashboard.module.css";

export default function TradingChart() {
    const container = useRef(null);

    useEffect(() => {
        if (!container.current) return;

        // Clear previous widget
        container.current.innerHTML = '';

        const script = document.createElement("script");
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
        script.type = "text/javascript";
        script.async = true;
        script.innerHTML = JSON.stringify({
            autosize: true,
            symbol: "FX:EURUSD",
            interval: "15",
            timezone: "Etc/UTC",
            theme: "dark",
            style: "1",
            locale: "en",
            enable_publishing: false,
            hide_top_toolbar: false,
            hide_legend: false,
            save_image: false,
            calendar: false,
            hide_volume: true,
            support_host: "https://www.tradingview.com",
            backgroundColor: "rgba(0, 0, 0, 0)",
            gridColor: "rgba(255, 255, 255, 0.06)",
            allow_symbol_change: true,
            details: true,
            hotlist: false,
            studies: ["STD;RSI"]
        });

        container.current.appendChild(script);
    }, []);

    return (
        <div className={styles.chartCard}>
            <h3 className={styles.widgetTitle}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
                EUR/USD Live Chart
            </h3>
            <div className={styles.chartContainer}>
                <div className="tradingview-widget-container" ref={container} style={{ height: "100%", width: "100%" }}>
                    <div className="tradingview-widget-container__widget" style={{ height: "calc(100% - 32px)", width: "100%" }}></div>
                </div>
            </div>
        </div>
    );
}
