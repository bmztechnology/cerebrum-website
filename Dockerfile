# Dockerfile for Cerebrum Web (Next.js Standalone)

# Stage 1: Dependencies
FROM node:20-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package*.json ./
RUN npm i

# Stage 2: Builder
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Dummy environment variables to satisfy Clerk/Stripe during build-time static analysis
ENV NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_dummy
ENV CLERK_SECRET_KEY=sk_test_dummy
ENV STRIPE_SECRET_KEY=sk_test_dummy
ENV TURSO_DATABASE_URL=libsql://dummy
ENV TURSO_AUTH_TOKEN=dummy

RUN npm run build

# Stage 3: Runner
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV production
ENV PORT 8080
ENV HOSTNAME "0.0.0.0"

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder /app/messages ./messages
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 8080

CMD ["node", "server.js"]
