#!/bin/sh
set -e


# Run Laravel migrations
php artisan migrate --force
php artisan migrate --seed --force


# Execute the CMD from the Dockerfile
exec "$@"
