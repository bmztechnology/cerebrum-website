import Stripe from "stripe";

const apiKey = process.env.STRIPE_SECRET_KEY || "sk_test_dummy_key_for_build_stability";

export const stripe = new Stripe(apiKey, {
    apiVersion: "2024-06-20", // Latest or preferred version
});
