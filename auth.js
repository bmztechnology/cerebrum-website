import NextAuth from "next-auth";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db } from "./lib/db";
import Nodemailer from "next-auth/providers/nodemailer";
import Google from "next-auth/providers/google";
import GitHub from "next-auth/providers/github";

export const { handlers, auth, signIn, signOut } = NextAuth({
    adapter: DrizzleAdapter(db),
    providers: [
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        GitHub({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
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
