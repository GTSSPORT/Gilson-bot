@echo off
echo Instalando dependências...
npm install

echo Instalando PM2...
npm install -g pm2

echo Iniciando o bot com PM2...
pm2 start index.js --name gtssport-bot

echo Salvando e configurando auto start...
pm2 save
pm2 startup

echo Tudo pronto! O bot está rodando em segundo plano.
pause
