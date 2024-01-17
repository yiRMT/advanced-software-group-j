#!/bin/bash

IP=`ifconfig | grep inet | cut -d " " -f2 | grep "[0-9]*\.[0-9]*\.[0-9]*\.[0-9]*" | awk 'NR==2'`
sed -i".bak" -e "/LOCAL_IP_ADDR=/d" .env
sed -i".bak" -e "/EXPO_PUBLIC_IP=/d" ./src/app-server/.env
rm .env.bak ./src/app-server/.env.bak
echo "LOCAL_IP_ADDR=$IP" >> .env
echo "EXPO_PUBLIC_IP=$IP" >> ./src/app-server/.env
