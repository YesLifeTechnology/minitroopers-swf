#!/bin/bash

# Check if Docker is installed
if ! command -v docker &> /dev/null
then
    echo "Docker could not be found. Please install Docker."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null
then
    echo "npm could not be found. Please install npm."
    exit 1
fi

# clone project
git clone https://gitlab.com/eternaltwin/minitroopers/minitroopers.git
cd minitroopers

# install yarn
npm install -g yarn

# build docker image
docker build -t eternaltwin/minitroopers .

# start docker container
docker run --name minitroopers -p 5432:5432 -e POSTGRES_PASSWORD=monMotDePasse -d eternaltwin/minitroopers

cp server/.env.example server/.env
cp eternaltwin.toml.example eternaltwin.toml

# Install dependencies
npm install

# Automatically create and apply migrations
cd ./server && npx prisma migrate dev --name auto_migration_$(date +%Y%m%d_%H%M%S)

# delete all auto_migration folder from server/prisma/migrations
rm -rf ./prisma/migrations/*auto_migration*/
cd ..

# Start server
npm run dev