const WebSocket = require('ws');
const server = new WebSocket.Server({port: '8080'});

server.on('connection', socket => {

    server.on("message", message => {
        socket.send("Roger that !" + message);
    })
});