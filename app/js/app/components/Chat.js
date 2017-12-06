import React, { Component } from 'react';
import io from 'socket.io-client';

import Sidebar from './chat/Sidebar';
import ChatWindow from './chat/ChatWindow';
import GenerateNick from './chat/GenerateNick';

class Chat extends Component {
    constructor(props) {
        super(props);

        // Initial state
        this.state = {
            nickname: '',
            messages: [],
            users: []
        };

        this.sendMessage = this.sendMessage.bind(this);
        this.saveNick = this.saveNick.bind(this);
        this.getMessage = this.getMessage.bind(this);
        this.updateUsers = this.updateUsers.bind(this);

        this.socket = io(`${window.location.protocol}//${window.location.hostname}:1340`);
        this.socket.on('chat msg', this.getMessage);
        this.socket.on('update users', this.updateUsers);
    }

    sendMessage(msg) {
        console.log('sending message...', msg);
        this.socket.emit('chat msg', JSON.stringify({
            nick: this.state.nickname,
            msg: msg
        }));
    }

    getMessage(data) {
        data = JSON.parse(data);
        this.setState(prevState => ({
            messages: [...prevState.messages, data]
        }));
    }

    saveNick(nick) {
        this.setState({
            nickname: nick
        });

        this.socket.emit('login', {
            nick,
            socketId: this.socket.id
        });
    }

    updateUsers(data) {
        data = JSON.parse(data);

        const res = data.map(item => item.user);

        this.setState({
            users: res
        });
    }

    render() {
        return (
            <div>
                {this.state.nickname ? (
                    <div className="chat">
                        <Sidebar users={this.state.users}/>
                        <ChatWindow sendMessage={this.sendMessage} history={this.state.messages}/>
                    </div>
                ) : (
                    <div className="chat">
                        <GenerateNick saveNick={this.saveNick}/>
                    </div>
                )}
            </div>
        );
    }
}

export default Chat;
