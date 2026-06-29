# =========================
# Stage 1: Build
# =========================
FROM node:24-alpine AS builder

WORKDIR /app

# Update OS + npm
RUN apk upgrade --no-cache && \
    npm install -g npm@latest

# Copy dependencies
COPY package*.json ./

# Clean install
RUN npm ci --omit=dev && \
    npm cache clean --force

# Copy source
COPY . .

# =========================
# Stage 2: Runtime
# =========================
FROM node:24-alpine

WORKDIR /app

# Update runtime packages + npm
RUN apk upgrade --no-cache && \
    apk add --no-cache curl && \
    npm install -g npm@latest

# Non-root user
RUN addgroup -S appgroup && \
    adduser -S appuser -G appgroup

# Copy only required files
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/src ./src

# If you have other folders:
# COPY --from=builder /app/routes ./routes
# COPY --from=builder /app/controllers ./controllers

ENV NODE_ENV=production

EXPOSE 5001

USER appuser

HEALTHCHECK --interval=30s \
  --timeout=10s \
  --start-period=10s \
  --retries=3 \
  CMD curl -fsS http://localhost:5001/health || exit 1

CMD ["npm","start"]