import { getLessonBySlug, getAllLessons } from "@/lib/academy";
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css'; // Import Katex CSS for math rendering
import Link from 'next/link';
import { notFound } from 'next/navigation';
import styles from '../../Academy.module.css';

// Generate static params so Next.js knows all routes at build time (optional but good for performance)
export function generateStaticParams() {
    const lessons = getAllLessons();
    return lessons.map((lesson) => ({
        slug: lesson.slug,
    }));
}

export default async function LessonPage({ params }) {
    const { locale, slug } = await params;
    const lesson = getLessonBySlug(slug);

    if (!lesson) {
        notFound();
    }

    return (
        <div className={styles.academyPage}>
            {/* Navbar Placeholder/Back Link */}
            <div className="container" style={{ paddingTop: '20px' }}>
                <Link href={`/${locale}/academy/courses`} className={styles.backLink}>
                    ← Back to Course Index
                </Link>
            </div>

            <div className={styles.lessonContainer}>
                {/* Header */}
                <header className={styles.lessonHeader}>
                    <div className={styles.moduleTag}>{lesson.slug}</div>
                    <h1>{lesson.title}</h1>
                </header>

                {/* Content */}
                <article className={styles.markdownContent}>
                    <ReactMarkdown
                        remarkPlugins={[remarkMath]}
                        rehypePlugins={[rehypeKatex]}
                        components={{
                            // Custom components if needed
                        }}
                    >
                        {lesson.content}
                    </ReactMarkdown>
                </article>

                {/* Navigation Footer */}
                <div className={styles.lessonFooter}>
                    <Link href={`/${locale}/academy/courses`} className={styles.nextBtn}>
                        Return to Index
                    </Link>
                </div>
            </div>
        </div>
    );
}
