"use client";
import { SignUp } from "@clerk/nextjs";
import styles from "../../login/Login.module.css"; // Reuse Login styles

import { useParams } from "next/navigation";

export default function SignupPage() {
    const { locale } = useParams();
    return (
        <div className={styles.container}>
            <div className={styles.authWrapper}>
                <SignUp path={`/${locale}/auth/signup`} routing="path" />
            </div>
        </div>
    );
}
