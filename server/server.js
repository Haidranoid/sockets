const port = process.env.PORT || 3000;
const path = require('path');
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server);
const publicPath = path.resolve(__dirname, '../public');

module.exports.io = io;
require('./sockets/socket');

app.use(express.static(publicPath));
server.listen(port, err => {
    if (err) throw new Error(err);

    console.log(`Server running in port: ${port}`);
});



