import { getAllLessons } from "@/lib/academy";
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import styles from '../Academy.module.css';
import CoursesList from './CoursesList';

// Since we have 1000 files, we might want to implement client-side search/pagination
// For now, let's render them all but with a search input client-side or just a clean list.
// However, statically rendering 1000 items is fine for Next.js.

export default async function CoursesPage({ params }) {
    const { locale } = await params;
    const lessons = getAllLessons();
    // Use translations if available, otherwise hardcode for now
    // const t = useTranslations('academy');

    return (
        <div className={styles.academyPage}>
            <div className={styles.container}>
                <div className={styles.heroSection}>
                    <h2>
                        Cerebrum Learning Center
                    </h2>
                    <p className={styles.subtitle}>
                        Master the principles of algorithmic trading with our comprehensive knowledge base.
                        <br />
                        <span style={{ color: 'var(--accent-primary)', fontWeight: 'bold' }}>{lessons.length}</span> lessons available.
                    </p>
                </div>

                {/* Dynamic Course List with Filtering */}
                <CoursesList lessons={lessons} locale={locale} />
            </div>
        </div>
    );
}
