#!/usr/bin/env bash

DIRECTORY="gotclub" # Directory name
DROPLET_URL="orc-dungeon.com" # Your own URL

echo "##############################"
echo "Building the frontend project"
echo "##############################"
npm run build

echo "##############################"
echo "Deploying Frontend project..."
echo "##############################"

scp -r ./build/* root@$DROPLET_URL:/var/www/$DIRECTORY

