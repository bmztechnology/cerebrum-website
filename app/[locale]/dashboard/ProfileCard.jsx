"use client";

import { useState } from "react";
import { useUser } from "@clerk/nextjs";
import styles from "./ProfileCard.module.css";
import { useTranslations } from "next-intl";

const UN_COUNTRIES = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan",
    "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi",
    "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo (Republic of the)", "Costa Rica", "Côte d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czechia",
    "Democratic People's Republic of Korea", "Democratic Republic of the Congo", "Denmark", "Djibouti", "Dominica", "Dominican Republic",
    "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia",
    "Fiji", "Finland", "France",
    "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana",
    "Haiti", "Honduras", "Hungary",
    "Iceland", "India", "Indonesia", "Iran (Islamic Republic of)", "Iraq", "Ireland", "Israel", "Italy",
    "Jamaica", "Japan", "Jordan",
    "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan",
    "Lao People's Democratic Republic", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg",
    "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia (Federated States of)", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar",
    "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Macedonia", "Norway",
    "Oman",
    "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal",
    "Qatar",
    "Republic of Korea", "Republic of Moldova", "Romania", "Russian Federation", "Rwanda",
    "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syrian Arab Republic",
    "Tajikistan", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu",
    "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United Republic of Tanzania", "United States", "Uruguay", "Uzbekistan",
    "Vanuatu", "Venezuela (Bolivarian Republic of)", "Vietnam",
    "Yemen",
    "Zambia", "Zimbabwe"
];

export default function ProfileCard({ subscriptionStatus, isSubActive, licenseKey, onManageSubscription, locale }) {
    const { user, isLoaded } = useUser();
    const t = useTranslations("dashboard");
    const [isEditing, setIsEditing] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);

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
        <div className={styles.profileCard}>
            {/* TOP SECTION: SUBSCRIPTION & LICENSE */}
            <div className={styles.topSection}>
                <div className={styles.sectionHeader}>
                    <h3 className={styles.sectionTitle}>💎 Subscription & License</h3>
                </div>

                {/* Subscription Row */}
                <div className={styles.subscriptionRow}>
                    <span className={styles.infoLabel}>Status</span>
                    <div className={styles.statusWrapper}>
                        <span className={`${styles.statusBadge} ${isSubActive ? styles.active : styles.inactive}`}>
                            {isSubActive ? "ACTIVE" : "INACTIVE"}
                        </span>
                        {isSubActive ? (
                            <button onClick={onManageSubscription} className={styles.manageLink}>Manage Subscription</button>
                        ) : (
                            <a href={`/${locale}/pricing`} className={styles.subscribeBtn}>Upgrade to Premium</a>
                        )}
                    </div>
                </div>

                {/* License Block */}
                {isSubActive ? (
                    <div className={styles.licenseBlock}>
                        <div className={styles.licenseHeader}>
                            <span className={styles.infoLabel}>Security License Key</span>
                            {licenseKey && (
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
                            )}
                        </div>

                        <div
                            className={styles.licenseBox}
                            onClick={() => {
                                navigator.clipboard.writeText(licenseKey);
                                alert("License Key Copied!");
                            }}
                        >
                            <code className={styles.licenseKey}>{licenseKey}</code>
                            <button className={styles.copyBtn}>Copy</button>
                        </div>
                    </div>
                ) : (
                    <div className={styles.licenseBlock}>
                        <div className={styles.licenseHeader}>
                            <span className={styles.infoLabel}>Security License Key</span>
                        </div>
                        <div className={styles.licenseBoxLocked}>
                            <span>🔒 Subscribe to unlock your license key</span>
                        </div>
                    </div>
                )}
            </div>

            {/* INFO SECTION */}
            <div className={styles.infoSection}>
                <div className={styles.sectionHeader}>
                    <h3 className={styles.sectionTitle}>👤 Personal Information</h3>
                    <button
                        onClick={() => setIsEditing(!isEditing)}
                        className={styles.editBtn}
                    >
                        {isEditing ? "Cancel" : "Edit"}
                    </button>
                </div>

                <div className={styles.infoGrid}>
                    <div className={styles.infoRow}>
                        <span className={styles.infoLabel}>Name</span>
                        <span className={styles.infoValue}>{user.fullName || "—"}</span>
                    </div>
                    <div className={styles.infoRow}>
                        <span className={styles.infoLabel}>Email</span>
                        <span className={styles.infoValue}>{user.primaryEmailAddress?.emailAddress}</span>
                    </div>
                    <div className={styles.infoRow}>
                        <span className={styles.infoLabel}>Country</span>
                        {isEditing ? (
                            <select
                                name="country"
                                value={formData.country}
                                onChange={handleChange}
                                className={styles.inputField}
                            >
                                <option value="">Select Country</option>
                                {UN_COUNTRIES.map(country => (
                                    <option key={country} value={country}>{country}</option>
                                ))}
                            </select>
                        ) : (
                            <span className={styles.infoValue}>{formData.country || "Not set"}</span>
                        )}
                    </div>
                    <div className={styles.infoRow}>
                        <span className={styles.infoLabel}>Phone</span>
                        {isEditing ? (
                            <input
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className={styles.inputField}
                                placeholder="+1..."
                            />
                        ) : (
                            <span className={styles.infoValue}>{formData.phone || "Not set"}</span>
                        )}
                    </div>
                    <div className={styles.infoRow}>
                        <span className={styles.infoLabel}>Member Since</span>
                        <span className={styles.infoValue}>{memberSince}</span>
                    </div>
                </div>

                {isEditing && (
                    <button onClick={handleSave} disabled={isLoading} className={styles.saveBtn}>
                        {isLoading ? "Saving..." : "Save Changes"}
                    </button>
                )}

                {/* Delete Account Section */}
                <div className={styles.dangerZone}>
                    {!showDeleteConfirm ? (
                        <button
                            onClick={() => setShowDeleteConfirm(true)}
                            className={styles.deleteBtn}
                        >
                            Delete Account
                        </button>
                    ) : (
                        <div className={styles.confirmDelete}>
                            <p>Are you sure? This action is irreversible.</p>
                            <div className={styles.confirmBtns}>
                                <button
                                    onClick={async () => {
                                        setIsDeleting(true);
                                        try {
                                            await user.delete();
                                            window.location.href = "/";
                                        } catch (error) {
                                            console.error("Failed to delete account:", error);
                                            alert("Failed to delete account. Please try again.");
                                            setIsDeleting(false);
                                        }
                                    }}
                                    disabled={isDeleting}
                                    className={styles.confirmDeleteBtn}
                                >
                                    {isDeleting ? "Deleting..." : "Yes, Delete"}
                                </button>
                                <button
                                    onClick={() => setShowDeleteConfirm(false)}
                                    className={styles.cancelDeleteBtn}
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
