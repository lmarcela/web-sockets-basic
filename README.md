# Rama main - Web socket con socket io

Este backend contiene todo lo necesario para configurar un servidor de express + socket.io.

Cualquier conexión adicional de sockets, se puede hacer en el archivo ```models/sockets.js``` y cualquier middleware adicional de express, se puede realizar en el archivo ```models/server.js```

Para probar en local se debe comentar en el index.html 
```bash
const socket = io('https://node-socket-basic.onrender.com')
```

Y descomentar
```bash
const socket = io('http://localhost:8080')
```

## Uso
```bash
npm install // Solo se debe hacer la primera vez
```
```bash
npm run dev // Para correr la aplicacion
```
