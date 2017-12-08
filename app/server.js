#!/usr/bin/env node

var express = require('express');
var app = express();
var path = require('path');
var socketChat = require('./socketServer');
var port = process.env.DBWEBB_PORT || 1337;
var socketioPort = process.env.DBWEBB_SOCKETIO_PORT || 1340;
var staticFiles = path.join(__dirname, '../dist');
var api = require('./api');
var bodyParser = require('body-parser');

app.use(bodyParser.json()); // for parsing application/json

new socketChat(socketioPort);

app.use(express.static(staticFiles));

app.use('/api', api);

app.get('*', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

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
