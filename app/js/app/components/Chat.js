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
            messages: []
        };

        this.sendMessage = this.sendMessage.bind(this);
        this.saveNick = this.saveNick.bind(this);
        this.getMessage = this.getMessage.bind(this);


        // Connect to socket server
        this.socket = io('localhost:8000');
        this.socket.on('chat msg', this.getMessage);
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
    }

    render() {
        return (
            <div>
                {this.state.nickname ? (
                    <div className="chat">
                        <Sidebar users={['user1', 'user2', 'user3']}/>
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
