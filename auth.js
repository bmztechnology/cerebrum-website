import NextAuth from "next-auth";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db } from "./lib/db";
import Nodemailer from "next-auth/providers/nodemailer";

export const { handlers, auth, signIn, signOut } = NextAuth({
    adapter: DrizzleAdapter(db),
    providers: [
        Nodemailer({
            server: {
                host: process.env.SMTP_HOST,
                port: parseInt(process.env.SMTP_PORT),
                auth: {
                    user: process.env.SMTP_USER,
                    pass: process.env.SMTP_PASS,
                },
            },
            from: process.env.SMTP_USER,
        }),
    ],
    callbacks: {
        session({ session, user }) {
            if (session.user) {
                session.user.id = user.id;
                session.user.subscriptionStatus = user.subscriptionStatus;
            }
            return session;
        },
    },
});
