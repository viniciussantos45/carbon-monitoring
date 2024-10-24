#!/bin/sh
set -e

php artisan config:cache
php artisan route:cache
php artisan view:cache

# Run Laravel migrations
php artisan migrate --force
php artisan migrate --seed --force


php artisan optimize:clear


# Execute the CMD from the Dockerfile
exec "$@"
