#!/bin/bash
echo "Atualizando o bot (index.js)..."
pm2 restart index.js --name gtssport-bot
