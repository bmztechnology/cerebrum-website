import { sqliteTable, text, integer, primaryKey } from "drizzle-orm/sqlite-core";

export const users = sqliteTable("user", {
    id: text("id").notNull().primaryKey(),
    name: text("name"),
    email: text("email").notNull(),
    emailVerified: integer("emailVerified", { mode: "timestamp_ms" }),
    image: text("image"),
    phone: text("phone"),
    country: text("country"),
    stripeCustomerId: text("stripe_customer_id"),
    subscriptionStatus: text("subscription_status").default("inactive"), // active, trialing, inactive, canceled
    subscriptionId: text("subscription_id"),
    licenseKey: text("license_key"), // Stripe Subscription ID used as License Key
    hwid: text("hwid"), // Hardware ID for machine locking
    expiresAt: integer("expires_at", { mode: "timestamp_ms" }),
});

export const accounts = sqliteTable(
    "account",
    {
        userId: text("userId")
            .notNull()
            .references(() => users.id, { onDelete: "cascade" }),
        type: text("type").notNull(),
        provider: text("provider").notNull(),
        providerAccountId: text("providerAccountId").notNull(),
        refresh_token: text("refresh_token"),
        access_token: text("access_token"),
        expires_at: integer("expires_at"),
        token_type: text("token_type"),
        scope: text("scope"),
        id_token: text("id_token"),
        session_state: text("session_state"),
    },
    (account) => ({
        compoundKey: primaryKey({
            columns: [account.provider, account.providerAccountId],
        }),
    })
);

export const sessions = sqliteTable("session", {
    sessionToken: text("sessionToken").notNull().primaryKey(),
    userId: text("userId")
        .notNull()
        .references(() => users.id, { onDelete: "cascade" }),
    expires: integer("expires", { mode: "timestamp_ms" }).notNull(),
});

export const verificationTokens = sqliteTable(
    "verificationToken",
    {
        identifier: text("identifier").notNull(),
        token: text("token").notNull(),
        expires: integer("expires", { mode: "timestamp_ms" }).notNull(),
    },
    (vt) => ({
        compoundKey: primaryKey({ columns: [vt.identifier, vt.token] }),
    })
);

export const gifts = sqliteTable("gift", {
    id: text("id").notNull().primaryKey(),
    key: text("key").notNull().unique(), // The manual license key
    type: text("type").notNull().default("monthly"), // monthly, yearly, lifetime
    hwid: text("hwid"), // Hardware ID lock
    status: text("status").notNull().default("active"), // active, expired, revoked
    expiresAt: integer("expires_at", { mode: "timestamp_ms" }),
    createdAt: integer("created_at", { mode: "timestamp_ms" }).$defaultFn(() => new Date()),
});
