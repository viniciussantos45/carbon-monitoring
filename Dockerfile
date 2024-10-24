# Stage 1: Build the application and assets
FROM node:18-slim as nodebuilder

WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install Node.js dependencies
RUN npm install

# Copy the rest of your application files
COPY . .

# Build assets using Vite
RUN npm run build

RUN cp /app/public/build/.vite/manifest.json /app/public/build/manifest.json

# Stage 2: Install Composer dependencies
FROM composer:2 as composer

WORKDIR /app

# Copy the entire application
COPY . /app

# Install PHP dependencies without development packages
RUN composer install --no-interaction --prefer-dist --optimize-autoloader

# Stage 3: Final image with Apache and PHP
FROM php:8.3-apache

# Set working directory
WORKDIR /var/www/html

# Install system dependencies and PHP extensions
RUN apt-get update && apt-get install -y \
    libzip-dev \
    libsqlite3-dev \
    zip \
    unzip \
    git \
    && docker-php-ext-install pdo pdo_sqlite zip

# Enable Apache mod_rewrite and headers
RUN a2enmod rewrite headers

# Update the Apache configuration to use the Laravel public directory
RUN sed -i 's|/var/www/html|/var/www/html/public|g' /etc/apache2/sites-available/000-default.conf

# Optional: Suppress Apache ServerName warning
RUN echo "ServerName localhost" >> /etc/apache2/apache2.conf

# Copy application files from previous stages
COPY --from=composer /app /var/www/html

# Copy built assets from nodebuilder stage to public directory
COPY --from=nodebuilder /app/public/build /var/www/html/public/build

# Set proper permissions
RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache /var/www/html/database /var/www/html/public/build

# Expose port 80
EXPOSE 80

# Copy custom entrypoint script
COPY docker-entrypoint.sh /usr/local/bin/entrypoint.sh

# Make entrypoint script executable
RUN chmod +x /usr/local/bin/entrypoint.sh

# Set the entrypoint
ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]

# Start Apache in the foreground
CMD ["apache2-foreground"]
