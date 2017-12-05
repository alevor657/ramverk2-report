#!/usr/bin/env node

var express = require('express');
var app = express();
var io = require('socket.io')();
var path = require('path');
var port = process.env.DBWEBB_PORT || 1337;
var staticFiles = path.join(__dirname, '../dist');

// port = process.env.NODE_ENV == 'production' ? 80 : port;

app.use(express.static(staticFiles));

app.get('*', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
    console.log('A user connected');

    socket.on('chat msg', function (data) {
        data = JSON.parse(data);
        console.log(data);
        io.emit('chat msg', JSON.stringify(data));
    });

    socket.on('disconnect', function() {
        console.log('User disconnected');
    });
});

io.listen(8000);
console.log('==> 🌎 Sockets server listens on 8000');

app.listen(port, function(error) {
    if (error) {
        console.error(error);
        return;
    }

    console.info(
        '==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.',
        port,
        port
    );
    // open(`http://localhost:${port}`);
});

module.exports = app;
