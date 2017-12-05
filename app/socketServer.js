var io = require('socket.io')();

class SocketChat {
    constructor(port) {
        this.connections = [];
        this.users = [];

        this.onDisconnect = this.onDisconnect.bind(this);
        this.onLogin = this.onLogin.bind(this);
        this.onConnection = this.onConnection.bind(this);

        io.on('connection', this.onConnection);

        io.listen(port);
        console.log('==> 🌎  Sockets server listens on port %s', port);
    }

    onChatMsg(data) {
        io.emit('chat msg', data);
    }

    onNewUser(data) {
        console.log('On new user', data, typeof data);
        io.emit('new user', data);
    }

    onLogin(user) {
        this.users.push(user);
        io.emit('update users', JSON.stringify(this.users));
    }

    onDisconnect(socket) {
        this.connections.splice(this.connections.indexOf(socket), 1);
        console.log('User disconnected');
        console.log('Clients conected: ', this.connections.length);
        console.log(this.connections);
    }

    onConnection(socket) {
        this.connections.push(socket);
        console.log('Clients conected: ', this.connections.length);

        socket.on('chat msg', this.onChatMsg);
        socket.on('new user', this.onNewUser);
        socket.on('login', this.onLogin);
        socket.on('disconnect', this.onDisconnect);
    }
}

module.exports = SocketChat;
