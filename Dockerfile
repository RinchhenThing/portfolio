# ==========================
# Stage 1: Build React App
# ==========================
FROM node:18-alpine AS builder

# Set working directory inside container
WORKDIR /app

# Copy package.json and package-lock.json first (for efficient caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the source code
COPY . .

# Build production-ready files
RUN npm run build

# ==========================
# Stage 2: Serve with Nginx
# ==========================
FROM nginx:stable-alpine

# Copy build files from builder stage
COPY --from=builder /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
