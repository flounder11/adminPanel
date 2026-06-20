# ===== build stage =====
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

RUN npm run build


# ===== production stage =====
FROM nginx:alpine

# чистим дефолтный сайт nginx
RUN rm -rf /usr/share/nginx/html/*

# копируем билд Vite
COPY --from=builder /app/dist /usr/share/nginx/html

# SPA fallback (важно даже если нет router — не мешает)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]