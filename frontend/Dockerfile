# Build stage
FROM node:20-alpine AS builder

ARG NUXT_PUBLIC_API_BASE=http://localhost:3000

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci

# Copy source code
COPY . .

# Set build-time environment variables
ENV NUXT_PUBLIC_API_BASE=$NUXT_PUBLIC_API_BASE

# Build the application
RUN npm run build

# Production stage
FROM node:20-alpine AS production

WORKDIR /app

# Copy built files
COPY --from=builder /app/.output ./.output
COPY --from=builder /app/package*.json ./

# Expose port
EXPOSE 3000

# Start the application
CMD ["node", ".output/server/index.mjs"]
