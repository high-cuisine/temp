FROM node:22-slim AS base

ENV PNPM_HOME="/root/.local/share/pnpm" \
    PATH="$PNPM_HOME:$PATH"

RUN apt-get update \
    && apt-get install -y --no-install-recommends openssl ca-certificates \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY prisma ./prisma

RUN npx prisma generate

COPY tsconfig*.json ./
COPY nest-cli.json ./
COPY libs ./libs
COPY src ./src

RUN npx prisma migrate dev

RUN npm run build

RUN npm prune --omit=dev

FROM node:22-slim AS runner

ENV NODE_ENV=production

WORKDIR /app

COPY --from=base /app/node_modules ./node_modules
COPY --from=base /app/package*.json ./
COPY --from=base /app/dist ./dist
COPY prisma ./prisma

CMD ["node", "dist/main"]

