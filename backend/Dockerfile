# =========================
# Stage 1: Build
# =========================
FROM node:24-alpine AS builder

# Working directory
WORKDIR /app

# Update OS packages first
RUN apk upgrade --no-cache

# Copy dependency files
COPY package*.json ./

# Install production dependencies only
RUN npm ci --omit=dev && \
    npm cache clean --force

# Copy source
COPY . .

# =========================
# Stage 2: Runtime
# =========================
FROM node:24-alpine

WORKDIR /app

# Update packages and install curl for healthcheck
RUN apk upgrade --no-cache && \
    apk add --no-cache curl

# Create non-root user
RUN addgroup -S appgroup && \
    adduser -S appuser -G appgroup

# Copy only required artifacts
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app ./

# Environment
ENV NODE_ENV=production

# Expose application port
EXPOSE 5001

# Run as non-root
USER appuser

# Health check
HEALTHCHECK --interval=30s \
  --timeout=10s \
  --start-period=10s \
  --retries=3 \
  CMD curl -fsS http://localhost:5001/health || exit 1

# Start application
CMD ["npm", "start"]