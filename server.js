const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);
const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

io.on('connection', (socket) => {
    console.log('ユーザーが参加しました');

    socket.on('send_ID', (ID) => {
        io.emit('send_ID', ID);
    });

    socket.on('disconnect', () => console.log('ユーザーが退出しました'));
});

server.listen(PORT, () => console.log('サーバーが起動中'));