"use client";

import { useState, useMemo } from 'react';
import Link from 'next/link';
import styles from '../Academy.module.css';

export default function CoursesList({ lessons, locale }) {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;

    // Get unique categories (handle undefined with fallback)
    const categories = ['All', ...new Set(lessons.map(l => l.category || 'General'))].sort();

    // Filter Items
    const filteredLessons = useMemo(() => {
        return lessons.filter(lesson => {
            const matchesSearch = lesson.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                lesson.slug.toLowerCase().includes(searchQuery.toLowerCase());

            const lessonCategory = lesson.category || 'General';
            const matchesCategory = selectedCategory === 'All' || lessonCategory === selectedCategory;

            return matchesSearch && matchesCategory;
        });
    }, [lessons, searchQuery, selectedCategory]);

    const handleCategoryChange = (cat) => {
        setSelectedCategory(cat);
        setCurrentPage(1); // Reset page on category change
    };

    // Pagination Logic
    const totalPages = Math.ceil(filteredLessons.length / itemsPerPage);

    // Reset page when search or filter changes result in fewer pages
    useMemo(() => {
        if (currentPage > totalPages && totalPages > 0) {
            setCurrentPage(1);
        }
    }, [totalPages, currentPage]);

    // Calculate current slice
    const currentLessons = filteredLessons.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
        setCurrentPage(1);
    };

    // Helper to generate page numbers
    const getPageNumbers = () => {
        const pages = [];
        const maxVisible = 5;

        let start = Math.max(1, currentPage - Math.floor(maxVisible / 2));
        let end = Math.min(totalPages, start + maxVisible - 1);

        if (end - start + 1 < maxVisible) {
            start = Math.max(1, end - maxVisible + 1);
        }

        for (let i = start; i <= end; i++) {
            pages.push(i);
        }
        return pages;
    };

    return (
        <>
            {/* Search Bar */}
            <div className={styles.searchContainer}>
                <svg className={styles.searchIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                <input
                    type="text"
                    placeholder="Search for a topic (e.g. 'RSI', 'Volume', 'Psychology')..."
                    className={styles.searchInput}
                    value={searchQuery}
                    onChange={handleSearch}
                />
            </div>

            {/* Category Filters */}
            <div className={styles.filterContainer}>
                {categories.map(cat => (
                    <button
                        key={cat}
                        className={`${styles.filterBtn} ${selectedCategory === cat ? styles.active : ''}`}
                        onClick={() => handleCategoryChange(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Results Info */}
            <div className={styles.paginationInfo}>
                Showing {currentLessons.length} of {filteredLessons.length} lessons
            </div>

            {/* Grid of Lessons */}
            <div className={styles.modulesGrid}>
                {currentLessons.map((lesson) => (
                    <Link
                        href={`/${locale}/academy/courses/${lesson.slug}`}
                        key={lesson.slug}
                        className={styles.card}
                    >
                        <div className={styles.moduleTag}>
                            {lesson.category || 'General'}
                        </div>

                        <div className={styles.cardHeader}>
                            <h3>{lesson.title}</h3>
                        </div>

                        <div className={styles.learnBtn}>
                            Start Learning →
                        </div>
                    </Link>
                ))}
            </div>

            {currentLessons.length === 0 && (
                <div style={{ textAlign: 'center', padding: '40px', color: 'var(--text-secondary)' }}>
                    No lessons found matching "{searchQuery}"
                </div>
            )}

            {/* Pagination Controls */}
            {totalPages > 1 && (
                <div className={styles.pagination}>
                    <button
                        className={styles.pageBtn}
                        onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                        disabled={currentPage === 1}
                    >
                        ←
                    </button>

                    {getPageNumbers().map(num => (
                        <button
                            key={num}
                            className={`${styles.pageBtn} ${currentPage === num ? styles.active : ''}`}
                            onClick={() => setCurrentPage(num)}
                        >
                            {num}
                        </button>
                    ))}

                    <button
                        className={styles.pageBtn}
                        onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                        disabled={currentPage === totalPages}
                    >
                        →
                    </button>
                </div>
            )}
        </>
    );
}
