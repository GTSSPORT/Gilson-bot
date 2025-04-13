#!/bin/bash

echo "Instalando dependências do projeto..."
npm install

echo "Instalando PM2 globalmente..."
npm install -g pm2

echo "Iniciando o bot com PM2..."
pm2 start index.js --name gtssport-bot

echo "Salvando configuração do PM2 para reinício automático..."
pm2 save
pm2 startup

echo "Tudo pronto! O bot está rodando em segundo plano."
