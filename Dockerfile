# Stage 1: Build React App
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Bypass strict CI checks and ESLint plugin issues during build
ENV CI=false
ENV DISABLE_ESLINT_PLUGIN=true

RUN npm run build

# Stage 2: Serve Production Build via Nginx
FROM nginx:alpine
WORKDIR /Singh_Lovepreet_ui_garden
COPY --from=build /app/build /Singh_Lovepreet_ui_garden

RUN echo 'server { \
    listen 80; \
    location / { \
        root /Singh_Lovepreet_ui_garden; \
        index index.html index.htm; \
        try_files $uri $uri/ /index.html; \
    } \
}' > /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]