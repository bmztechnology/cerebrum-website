"use client";
import styles from "./Academy.module.css";
import Link from 'next/link';

export default function LessonContent({ title, content, nextLesson }) {
    return (
        <div className={styles.lessonContainer}>
            <div className={styles.lessonHeader}>
                <Link href="/academy" className={styles.backLink}>← Back to Academy</Link>
                <h2>{title}</h2>
            </div>

            <div className={styles.lessonBody}>
                {content}
            </div>

            {nextLesson && (
                <div className={styles.lessonFooter}>
                    <Link href={nextLesson.href} className={styles.nextBtn}>
                        Next Lesson: {nextLesson.title} →
                    </Link>
                </div>
            )}
        </div>
    );
}
