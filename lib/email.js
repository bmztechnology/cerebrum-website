import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '465'),
    secure: true,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

export async function sendWelcomeEmail(email, name, licenseKey) {
    const downloadLink = "https://github.com/bmztechnology/cerebrum-website/releases/download/v1.2.1/CerebrumSetup_1.2.1.exe";

    const mailOptions = {
        from: `"Cerebrum Forex" <${process.env.SMTP_USER}>`,
        to: email,
        subject: "Welcome to Cerebrum FX - Your License Key",
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #ffffff; background-color: #0f172a;">
                <div style="background: linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%); padding: 30px; text-align: center;">
                    <h1 style="color: white; margin: 0; font-size: 28px;">Welcome Aboard! 🚀</h1>
                </div>
                
                <div style="padding: 40px;">
                    <p style="font-size: 16px; line-height: 1.6; color: #cbd5e1;">Hi <strong>${name}</strong>,</p>
                    <p style="font-size: 16px; line-height: 1.6; color: #cbd5e1;">Thank you for joining Cerebrum Forex. Your account is now active and ready to trade.</p>
                    
                    <div style="background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 12px; padding: 24px; margin: 32px 0;">
                        <p style="margin: 0 0 8px; color: #94a3b8; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Your License Key</p>
                        <code style="display: block; font-size: 20px; color: #00d4ff; font-family: monospace; font-weight: bold;">${licenseKey}</code>
                    </div>

                    <p style="font-size: 16px; line-height: 1.6; color: #cbd5e1;">To get started, download the software and enter your license key during activation.</p>

                    <div style="text-align: center; margin: 40px 0;">
                        <a href="${downloadLink}" style="background: #00d4ff; color: #000000; padding: 16px 32px; border-radius: 50px; text-decoration: none; font-weight: bold; font-size: 16px; display: inline-block;">Download Installer (.exe)</a>
                    </div>
                    
                    <p style="font-size: 14px; color: #94a3b8; text-align: center; margin-top: 40px;">
                        Need help? Check our <a href="https://cerebrumfx.com/docs" style="color: #00d4ff;">Documentation</a> or reply to this email.
                    </p>
                </div>
                
                <div style="background: #1e293b; padding: 20px; text-align: center; font-size: 12px; color: #64748b;">
                    © 2026 Cerebrum Forex. All rights reserved.
                </div>
            </div>
        `
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log(`Welcome email sent to ${email}`);
        return true;
    } catch (error) {
        console.error("Failed to send welcome email:", error);
        return false;
    }
}
