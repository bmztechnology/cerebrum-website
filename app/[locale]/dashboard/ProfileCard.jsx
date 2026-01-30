"use client";

import { useState } from "react";
import { useUser } from "@clerk/nextjs";
import styles from "./Dashboard.module.css";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { UN_COUNTRIES } from "@/lib/countries";

export default function ProfileCard({ subscriptionStatus, isSubActive, licenseKey, onManageSubscription, locale }) {
    const { user, isLoaded } = useUser();
    const t = useTranslations("dashboard");
    const [isEditing, setIsEditing] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    // Initial Form Data
    const [formData, setFormData] = useState({
        country: user?.unsafeMetadata?.country || "",
        phone: user?.phoneNumbers?.[0]?.phoneNumber || user?.unsafeMetadata?.phone || ""
    });

    if (!isLoaded || !user) return null;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSave = async () => {
        setIsLoading(true);
        try {
            await user.update({
                unsafeMetadata: {
                    ...user.unsafeMetadata,
                    country: formData.country,
                    phone: formData.phone
                }
            });
            setIsEditing(false);
        } catch (err) {
            console.error("Profile update failed", err);
        } finally {
            setIsLoading(false);
        }
    };

    const memberSince = new Date(user.createdAt).getFullYear();

    return (
        <div className={styles.profileMasterCard}>

            {/* LEFT COLUMN: IDENTITY */}
            <div className={styles.identityColumn}>
                <div className={styles.avatarLarge}>
                    <Image
                        src={user.imageUrl}
                        alt={`${user.firstName}'s Profile`}
                        width={140}
                        height={140}
                        className={styles.avatarImgLarge}
                        priority
                    />
                    <div className={styles.onlineBadge}></div>
                </div>

                <div className={styles.identityInfo}>
                    <h2 className={styles.identityName}>
                        {user.firstName} {user.lastName}
                    </h2>
                    <div className={styles.identityEmail}>
                        {user.primaryEmailAddress?.emailAddress}
                    </div>
                    <span className={styles.identityRole}>PRO TRADER</span>

                </div>

                <button
                    onClick={() => setIsEditing(!isEditing)}
                    className={isEditing ? styles.saveBtnSmall : styles.editBtnOutline}
                >
                    {isEditing ? (t("cancelBtn") || "Cancel") : (t("editBtn") || "Edit Profile")}
                </button>
            </div>

            {/* RIGHT COLUMN: DATA GRID (3 Rows, 2 Columns) */}
            <div className={styles.dataColumn}>

                {/* ROW 1: STATUS & LICENSE */}
                <div className={styles.dataRow}>
                    <div className={styles.dataCard}>
                        <span className={styles.dataLabel}>Subscription Status</span>
                        <div className={styles.statusBadgeWrapper}>
                            <span className={`${styles.statusBadge} ${isSubActive ? styles.statusActive : styles.statusInactive}`}>
                                {t(subscriptionStatus) || subscriptionStatus}
                            </span>
                            {isSubActive ? (
                                <button onClick={onManageSubscription} className={styles.linkBtn}>{t("manageSubscription")}</button>
                            ) : (
                                <a href={`/${locale}#pricing`} className={styles.actionBtnPrimary} style={{ textDecoration: 'none' }}>
                                    Subscribe Now
                                </a>
                            )}
                        </div>
                    </div>

                    <div className={styles.dataCard}>
                        <span className={styles.dataLabel}>License Key</span>
                        {isSubActive && licenseKey ? (
                            <div className="flex flex-col gap-2">
                                <div className={styles.licenseValue} title="Click to Copy" onClick={() => navigator.clipboard.writeText(licenseKey)}>
                                    {licenseKey}
                                    <span className={styles.copyIcon}>📋</span>
                                </div>
                                <button
                                    className={styles.resetBtn}
                                    onClick={async () => {
                                        if (confirm("Reset License Lock? This allows you to switch computers.")) {
                                            const res = await fetch('/api/license/reset', { method: 'POST' });
                                            const data = await res.json();
                                            if (res.ok) alert("License Reset! You can now login on your new PC.");
                                            else alert(data.error || "Error resetting license.");
                                        }
                                    }}
                                >
                                    Reset PC Lock
                                </button>
                            </div>
                        ) : (
                            <div className={styles.licenseBlur}>CFX-XXXX-XXXX 🔒</div>
                        )}
                    </div>
                </div>

                {/* ROW 2: PERSONAL DETAILS */}
                <div className={styles.dataRow}>
                    <div className={styles.dataCard}>
                        <span className={styles.dataLabel}>{t("labelCountry") || "Country"}</span>
                        {isEditing ? (
                            <select
                                name="country"
                                value={formData.country}
                                onChange={handleChange}
                                className={styles.miniInput}
                            >
                                <option value="">Global</option>
                                {UN_COUNTRIES.map(country => (
                                    <option key={country} value={country}>{country}</option>
                                ))}
                            </select>
                        ) : (
                            <div className={styles.dataValue}>{formData.country || "Global"}</div>
                        )}
                    </div>

                    <div className={styles.dataCard}>
                        <span className={styles.dataLabel}>Member Since</span>
                        <div className={styles.dataValue}>{memberSince}</div>
                    </div>
                </div>

                {/* ROW 3: CONTACT & ACTIONS */}
                <div className={styles.dataRow}>
                    <div className={styles.dataCard}>
                        <span className={styles.dataLabel}>{t("labelPhone") || "Phone"}</span>
                        {isEditing ? (
                            <input name="phone" value={formData.phone} onChange={handleChange} className={styles.miniInput} placeholder="+1..." />
                        ) : (
                            <div className={styles.dataValue}>{formData.phone || "Not set"}</div>
                        )}
                    </div>

                    <div className={styles.dataCard}>
                        <span className={styles.dataLabel}>Actions</span>
                        {isEditing ? (
                            <button onClick={handleSave} disabled={isLoading} className={styles.actionBtnPrimary}>
                                {isLoading ? "Saving..." : "Save Changes"}
                            </button>
                        ) : (
                            <div className={styles.dataValue} style={{ fontSize: '12px', color: '#64748b' }}>
                                Account is secure
                            </div>
                        )}
                    </div>
                </div>

            </div>
        </div>
    );
}
