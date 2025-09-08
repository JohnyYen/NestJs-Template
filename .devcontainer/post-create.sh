#!/bin/bash

# Exit on any error
set -e

echo "🚀 Setting up NestJS development environment..."

# Install dependencies
echo "📦 Installing dependencies with pnpm..."
pnpm install

# Wait for database to be ready
echo "⏳ Waiting for database to be ready..."

# Check if PostgreSQL is running (default)
if pg_isready -h db -p 5432 -U postgres >/dev/null 2>&1; then
    echo "✅ PostgreSQL is ready"
    DB_TYPE="postgresql"
elif nc -z db 27017 >/dev/null 2>&1; then
    echo "✅ MongoDB is ready"
    DB_TYPE="mongodb"
else
    echo "⏳ Waiting for database..."
    # Wait for either PostgreSQL or MongoDB
    until pg_isready -h db -p 5432 -U postgres >/dev/null 2>&1 || nc -z db 27017 >/dev/null 2>&1; do
        echo "Waiting for database..."
        sleep 2
    done
    
    # Determine which database is available
    if pg_isready -h db -p 5432 -U postgres >/dev/null 2>&1; then
        DB_TYPE="postgresql"
        echo "✅ PostgreSQL is ready"
    else
        DB_TYPE="mongodb"
        echo "✅ MongoDB is ready"
    fi
fi

# Generate Prisma client (only for PostgreSQL)
if [ "$DB_TYPE" = "postgresql" ]; then
    echo "🔧 Generating Prisma client..."
    pnpm prisma generate

    echo "🗄️ Running database migrations..."
    pnpm prisma migrate deploy
else
    echo "ℹ️ Skipping Prisma setup for MongoDB (use Mongoose or other MongoDB driver)"
fi

# Create .env file if it doesn't exist
if [ ! -f .env ]; then
    echo "📝 Creating .env file..."
    
    if [ "$DB_TYPE" = "postgresql" ]; then
        cat > .env << EOF
# Database (PostgreSQL)
DATABASE_URL="postgresql://postgres:password@db:5432/nestjs_db?schema=public"

# JWT
JWT_SECRET="your-super-secret-jwt-key-change-this-in-production"
JWT_EXPIRES_IN="7d"

# App
NODE_ENV="development"
PORT=3000

# Swagger
SWAGGER_TITLE="NestJS API"
SWAGGER_DESCRIPTION="API documentation for NestJS application"
SWAGGER_VERSION="1.0"
SWAGGER_TAG="nestjs-api"
EOF
    else
        cat > .env << EOF
# Database (MongoDB)
MONGODB_URI="mongodb://admin:password@db:27017/nestjs_db?authSource=admin"

# JWT
JWT_SECRET="your-super-secret-jwt-key-change-this-in-production"
JWT_EXPIRES_IN="7d"

# App
NODE_ENV="development"
PORT=3000

# Swagger
SWAGGER_TITLE="NestJS API"
SWAGGER_DESCRIPTION="API documentation for NestJS application"
SWAGGER_VERSION="1.0"
SWAGGER_TAG="nestjs-api"
EOF
    fi
    
    echo "✅ .env file created with $DB_TYPE configuration"
else
    echo "✅ .env file already exists"
fi

echo "🎉 Development environment setup complete!"
echo ""
echo "📋 Available commands:"
echo "  pnpm dev          - Start development server"
echo "  pnpm build        - Build the application"
echo "  pnpm test         - Run tests"
echo "  pnpm lint         - Run linter"
if [ "$DB_TYPE" = "postgresql" ]; then
    echo "  pnpm prisma studio - Open Prisma Studio"
fi
echo ""
echo "🌐 Your application will be available at: http://localhost:3000"
if [ "$DB_TYPE" = "postgresql" ]; then
    echo "📊 Prisma Studio will be available at: http://localhost:5555"
    echo "🗄️ PostgreSQL is available at: localhost:5432"
else
    echo "🗄️ MongoDB is available at: localhost:27017"
fi
echo ""
echo "💡 To switch between databases:"
echo "  1. Edit .devcontainer/docker-compose.yml"
echo "  2. Comment/uncomment the desired database service"
echo "  3. Rebuild the devcontainer"
