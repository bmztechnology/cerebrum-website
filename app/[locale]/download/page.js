"use client";

import { useTranslations } from "next-intl";
import { useUser } from "@clerk/nextjs";
import Link from 'next/link';
import Image from "next/image";

export default function DownloadPage() {
    const t = useTranslations("download");
    const { isSignedIn, user } = useUser();

    // Use the Cloud Run URL as the "Source of Truth" for the file
    const installerUrl = "https://cerebrum-web-889360603648.europe-west1.run.app/downloads/CerebrumSetup_1.2.1.exe";

    return (
        <div style={{
            minHeight: "100vh",
            paddingTop: "120px",
            background: "radial-gradient(circle at top, #1e293b 0%, #0f172a 100%)",
            color: "white",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        }}>
            <div style={{ maxWidth: "1200px", width: "100%", padding: "0 24px", textAlign: "center" }}>

                {/* Hero Icon */}
                <div style={{
                    width: "120px", height: "120px", margin: "0 auto 32px",
                    background: "linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%)",
                    borderRadius: "32px", display: "flex", alignItems: "center", justifyContent: "center",
                    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.5)"
                }}>
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="7 10 12 15 17 10"></polyline>
                        <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                </div>

                <h1 style={{ fontSize: "48px", fontWeight: "bold", marginBottom: "16px", background: "linear-gradient(to right, white, #94a3b8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                    {t("title") || "Download Cerebrum Forex"}
                </h1>

                <p style={{ fontSize: "20px", color: "#94a3b8", maxWidth: "600px", margin: "0 auto 48px" }}>
                    {t("subtitle") || "The world's most advanced AI trading assistant. Precision execution, automated risk management."}
                </p>

                {/* Main Action Card */}
                <div style={{
                    background: "rgba(30, 41, 59, 0.5)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: "24px",
                    padding: "48px",
                    maxWidth: "600px",
                    margin: "0 auto",
                    backdropFilter: "blur(12px)"
                }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "32px", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "24px" }}>
                        <div style={{ textAlign: "left" }}>
                            <div style={{ color: "#94a3b8", fontSize: "14px", marginBottom: "4px" }}>Version</div>
                            <div style={{ fontSize: "18px", fontWeight: "bold" }}>1.2.1 Stable</div>
                        </div>
                        <div style={{ textAlign: "right" }}>
                            <div style={{ color: "#94a3b8", fontSize: "14px", marginBottom: "4px" }}>Platform</div>
                            <div style={{ fontSize: "18px", fontWeight: "bold" }}>Windows 10/11</div>
                        </div>
                    </div>

                    <a href={installerUrl} style={{
                        display: "block",
                        width: "100%",
                        padding: "20px",
                        background: "#00d4ff",
                        color: "#0f172a",
                        borderRadius: "16px",
                        fontWeight: "800",
                        fontSize: "20px",
                        textDecoration: "none",
                        marginBottom: "16px",
                        transition: "transform 0.2s"
                    }}>
                        {t("downloadBtn") || "Download for Windows"}
                    </a>

                    <p style={{ fontSize: "14px", color: "#64748b" }}>
                        {t("requirements") || "Requires MetaTrader 5 (MT5) installed."}
                    </p>
                </div>

                {/* Installation Steps */}
                <div style={{ marginTop: "80px", textAlign: "left", maxWidth: "800px", margin: "80px auto 0" }}>
                    <h3 style={{ fontSize: "24px", marginBottom: "32px", textAlign: "center" }}>{t("installTitle") || "Installation Guide"}</h3>

                    {[1, 2, 3].map((step) => (
                        <div key={step} style={{ display: "flex", gap: "24px", marginBottom: "32px" }}>
                            <div style={{
                                width: "48px", height: "48px", borderRadius: "50%",
                                background: "rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center",
                                fontWeight: "bold", fontSize: "20px", flexShrink: 0
                            }}>
                                {step}
                            </div>
                            <div>
                                <h4 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "8px" }}>
                                    {step === 1 ? (t("step1Title") || "Run the Installer") :
                                        step === 2 ? (t("step2Title") || "Enter License Key") :
                                            (t("step3Title") || "Start Trading")}
                                </h4>
                                <p style={{ color: "#94a3b8", lineHeight: "1.6" }}>
                                    {step === 1 ? (t("step1Desc") || "Double-click CerebrumSetup.exe and follow the wizard.") :
                                        step === 2 ? (t("step2Desc") || "Use the key sent to your email or found in your Dashboard.") :
                                            (t("step3Desc") || "Launch MT5 and attach Cerebrum to your EUR/USD chart.")}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}
