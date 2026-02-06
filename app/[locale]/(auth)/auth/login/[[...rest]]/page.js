"use client";
import { SignIn } from "@clerk/nextjs";
import styles from "../Login.module.css"; // Reuse existing styles for container if possible, or inline

import { useParams } from "next/navigation";

export default function LoginPage() {
    const { locale } = useParams();
    return (
        <div className={styles.container}>
            <div className={styles.authWrapper}>
                <SignIn path={`/${locale}/auth/login`} routing="path" />
            </div>
        </div>
    );
}
