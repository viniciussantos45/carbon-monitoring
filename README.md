# Carbon Monitoring

## Overview

Carbon Monitoring is a web application designed to provide real-time monitoring and visualization of carbon emissions. The application is built using Laravel for the backend, React for the frontend, and Docker for containerization. It leverages Vite for the build process, ShadCN for UI components, and Chart.js for data visualization.

## Table of Contents

- Overview
- Features
- Prerequisites
- Installation
- Usage
- Testing
- Contributing
- License

## Features

- Real-time data visualization with charts
- User authentication
- RESTful API
- Dockerized environment for development and production
- Unit and feature tests

## Prerequisites

- Docker
- Docker Compose
- Node.js
- npm or yarn

## Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/your-repo/carbon-monitoring.git
    cd carbon-monitoring
    ```

2. Copy the example environment file and configure it:

    ```sh
    cp .env.example .env
    ```

3. Build and start the Docker containers using Laravel Sail:

    ```sh
    ./vendor/bin/sail up -d
    ```

4. Install PHP dependencies:

    ```sh
    ./vendor/bin/sail composer install
    ```

5. Install Node.js dependencies:

    ```sh
    ./vendor/bin/sail npm install
    ```

6. Run database migrations and seeders:

    ```sh
    ./vendor/bin/sail artisan migrate --seed
    ```

## Usage

- Access the application at `http://localhost:10000`
- API documentation can be found at `http://localhost:10000/api/documentation`

## Testing

To run tests, use the following command:

```sh
./vendor/bin/sail artisan test
```

## Contributing

Thank you for considering contributing to this project! Please read the [contribution guide](https://laravel.com/docs/contributions) for details on our code of conduct and the process for submitting pull requests.

## License

This project is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).

## Technologies Used

- **Laravel**: Backend framework
- **React**: Frontend library
- **Vite**: Build tool
- **ShadCN**: UI components
- **Chart.js**: Data visualization
- **Docker**: Containerization
- **Laravel Sail**: Docker development environment for Laravel

## Project Structure

```
.dockerignore
.editorconfig
.env
.env.example
.env.prod-bkp
.gitattributes
.gitignore
app/
 Enums/
 Http/
 Models/
 Providers/
 Services/
artisan
bootstrap/
 app.php
 cache/
 ...
components.json
composer.json
composer.lock
config/
database/
docker-compose.yml
docker-entrypoint.sh
docker.env
Dockerfile
nginx.conf
package.json
phpunit.xml
postcss.config.js
public/
README.md
resources/
routes/
storage/
tailwind.config.js
tests/
tsconfig.json
tsconfig.node.json
vendor/
vite-env.d.ts
vite.config.ts
```

## Environment Variables

Here are some important environment variables used in this project:

- **APP_ENV**: The application environment (e.g., local, production)
- **APP_KEY**: The application key
- **APP_DEBUG**: Debug mode (true/false)
- **APP_URL**: The application URL
- **DB_CONNECTION**: Database connection type (e.g., mysql, sqlite)
- **DB_HOST**: Database host
- **DB_PORT**: Database port
- **DB_DATABASE**: Database name
- **DB_USERNAME**: Database username
- **DB_PASSWORD**: Database password
- **VITE_URL**: Vite development server URL

For a full list of environment variables, refer to the `.env.example` file.
