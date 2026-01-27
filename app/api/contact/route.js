import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

// Configuration du transporteur SMTP OVH
const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '465'),
    secure: true, // true pour le port 465, false pour les autres ports
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

// Simple In-Memory Rate Limiter
const rateLimit = new Map();
const LIMIT = 3; // Max requests
const WINDOW = 60 * 60 * 1000; // 1 Hour

function isRateLimited(ip) {
    const now = Date.now();
    const record = rateLimit.get(ip);

    if (!record) {
        rateLimit.set(ip, { count: 1, firstRequest: now });
        return false;
    }

    if (now - record.firstRequest > WINDOW) {
        // Reset window
        rateLimit.set(ip, { count: 1, firstRequest: now });
        return false;
    }

    if (record.count >= LIMIT) {
        return true;
    }

    record.count += 1;
    return false;
}

// Basic Sanitization to prevent HTML Injection
function sanitize(str) {
    if (!str) return '';
    return str.replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

export async function POST(request) {
    try {
        // 1. Check Rate Limit
        const ip = request.headers.get('x-forwarded-for') || 'unknown';
        if (isRateLimited(ip)) {
            return NextResponse.json(
                { error: 'Too many requests. Please try again later.' },
                { status: 429 }
            );
        }

        const { name, email, subject, message } = await request.json();

        // 2. Validation simple
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Name, email and message are required' },
                { status: 400 }
            );
        }

        // 3. Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Invalid email format' },
                { status: 400 }
            );
        }

        // 4. Sanitize Inputs
        const safeName = sanitize(name);
        const safeSubject = sanitize(subject);
        const safeMessage = sanitize(message);
        const safeEmail = sanitize(email);

        // Envoi de l'email via SMTP
        const mailOptions = {
            from: `"Contact Site Web" <${process.env.SMTP_USER}>`, // Obligatoire: adresse OVH authentifiée
            to: process.env.CONTACT_EMAIL || 'contact@cerebrumfx.com',
            replyTo: safeEmail, // Permet de répondre directement au client
            subject: safeSubject || `[Contact Site] Nouveau message de ${safeName}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #ffffff;">
                    <div style="background: linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%); padding: 25px; border-radius: 10px 10px 0 0; text-align: center;">
                        <h1 style="color: white; margin: 0; font-size: 24px;">📧 Nouveau Message Client</h1>
                    </div>
                    <div style="background: #1a1a25; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #333;">
                        <p style="margin-bottom: 15px;"><strong style="color: #00d4ff;">Nom :</strong> ${safeName}</p>
                        <p style="margin-bottom: 15px;"><strong style="color: #00d4ff;">Email :</strong> <a href="mailto:${safeEmail}" style="color: #00d4ff; text-decoration: none;">${safeEmail}</a></p>
                        ${safeSubject ? `<p style="margin-bottom: 15px;"><strong style="color: #00d4ff;">Sujet :</strong> ${safeSubject}</p>` : ''}
                        
                        <div style="margin-top: 25px; padding: 20px; background: #12121a; border-left: 4px solid #00d4ff; border-radius: 4px;">
                            <p style="white-space: pre-wrap; margin: 0; line-height: 1.6; color: #e0e0e0;">${safeMessage}</p>
                        </div>
                        
                        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #333; font-size: 11px; color: #64748b; text-align: center;">
                            Ce message a été envoyé depuis le formulaire de contact de Cerebrum Forex.
                        </div>
                    </div>
                </div>
            `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json(
            { success: true, message: 'Email sent successfully via SMTP' },
            { status: 200 }
        );

    } catch (error) {
        console.error('SMTP Error:', error);
        return NextResponse.json(
            { error: 'Failed to send email. Please check server logs.' },
            { status: 500 }
        );
    }
}
