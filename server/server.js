const port = process.env.PORT || 3000;
const path = require('path');
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const socketServer = require('socket.io')(server);
const publicPath = path.resolve(__dirname, '../public');

module.exports.socketServer = socketServer;
require('./sockets/socketServer');

app.use(express.static(publicPath));
server.listen(port, err => {
    if (err) throw new Error(err);

    console.log(`Server running in port: ${port}`);
});



