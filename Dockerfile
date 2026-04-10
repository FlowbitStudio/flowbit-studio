# ─────────────────────────────────────────────────────────────────────────
# Multi-stage build: compila la app Vite con Node, después la sirve
# con nginx para un footprint mínimo (~25MB final).
#
# Deploy: EasyPanel detecta este Dockerfile en la raíz del repo y lo
# reconstruye automáticamente en cada push a main.
# ─────────────────────────────────────────────────────────────────────────

# ── Stage 1: build ──────────────────────────────────────────────────────
FROM node:22-slim AS builder

WORKDIR /app

# Install deps con lockfile exacto (reproducible)
COPY package.json package-lock.json ./
RUN npm ci

# Copy source y build de producción
COPY . .
RUN npm run build

# ── Stage 2: serve ──────────────────────────────────────────────────────
FROM nginx:alpine

# Copy built assets from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Custom nginx config para SPA routing (React Router)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
