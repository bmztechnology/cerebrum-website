'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import styles from './ContactForm.module.css';

export default function ContactForm() {
    const t_intl = useTranslations();
    const locale = useLocale();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle, loading, success, error
    const [errorMessage, setErrorMessage] = useState('');

    const t = {
        title: t_intl(`contactForm.title`),
        subtitle: t_intl(`contactForm.subtitle`),
        name: t_intl(`contactForm.name`),
        email: t_intl(`contactForm.email`),
        subject: t_intl(`contactForm.subject`),
        message: t_intl(`contactForm.message`),
        send: t_intl(`contactForm.send`),
        sending: t_intl(`contactForm.sending`),
        success: t_intl(`contactForm.success`),
        error: t_intl(`contactForm.error`),
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMessage('');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                setStatus('error');
                setErrorMessage(data.error || t.error);
            }
        } catch (error) {
            setStatus('error');
            setErrorMessage(t.error);
        }
    };

    return (
        <section className={styles.section} id="contact">
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.badge}>📧 {t.badge || 'Contact'}</span>
                    <h2 className={styles.title}>{t.title}</h2>
                    <p className={styles.subtitle}>{t.subtitle}</p>
                </div>

                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.row}>
                        <div className={styles.field}>
                            <label htmlFor="name" className={styles.label}>{t.name}</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className={styles.input}
                                placeholder="John Doe"
                            />
                        </div>
                        <div className={styles.field}>
                            <label htmlFor="email" className={styles.label}>{t.email}</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className={styles.input}
                                placeholder="john@example.com"
                            />
                        </div>
                    </div>

                    <div className={styles.field}>
                        <label htmlFor="subject" className={styles.label}>{t.subject}</label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className={styles.input}
                            placeholder="Question about Cerebrum Forex"
                        />
                    </div>

                    <div className={styles.field}>
                        <label htmlFor="message" className={styles.label}>{t.message}</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={5}
                            className={styles.textarea}
                            placeholder="Your message here..."
                        />
                    </div>

                    <button
                        type="submit"
                        className={styles.button}
                        disabled={status === 'loading'}
                    >
                        {status === 'loading' ? (
                            <>
                                <span className={styles.spinner}></span>
                                {t.sending}
                            </>
                        ) : (
                            <>
                                <span>🚀</span>
                                {t.send}
                            </>
                        )}
                    </button>

                    {status === 'success' && (
                        <div className={styles.successMessage}>
                            ✅ {t.success}
                        </div>
                    )}

                    {status === 'error' && (
                        <div className={styles.errorMessage}>
                            ❌ {errorMessage}
                        </div>
                    )}
                </form>
            </div>
        </section>
    );
}
