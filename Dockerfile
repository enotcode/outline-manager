FROM oven/bun:1 AS base

FROM base AS deps
WORKDIR /app

COPY package.json bun.lock* ./
RUN bun install --frozen-lockfile

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ARG OUTLINE_API_URL
ARG OUTLINE_FINGERPRINT
ENV OUTLINE_API_URL=$OUTLINE_API_URL
ENV OUTLINE_FINGERPRINT=$OUTLINE_FINGERPRINT

RUN bun run build

FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
# Disable telemetry during runtime
ENV NEXT_TELEMETRY_DISABLED=1

ARG OUTLINE_API_URL
ARG OUTLINE_FINGERPRINT
ENV OUTLINE_API_URL=$OUTLINE_API_URL
ENV OUTLINE_FINGERPRINT=$OUTLINE_FINGERPRINT

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

RUN chown -R nextjs:nodejs .next

USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["bun", "run", "server.js"]