import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ChatWindow extends Component {
    constructor(props) {
        super(props);

        this.state = {
            msg: '',
        };

        this.handleMessageInput = this.handleMessageInput.bind(this);
        this.handleSend = this.handleSend.bind(this);
    }

    handleMessageInput(e) {
        this.setState({
            msg: e.target.value
        });
    }

    handleSend() {
        this.props.sendMessage(this.state.msg);
        this.setState({
            msg: ''
        });
    }

    render() {
        return (
            <div className="chat-window">
                <div className="messages">
                    {this.props.history.map((msg, i) => (
                        <p key={i}>
                            <span><b>{msg.nick}</b>: </span>
                            {msg.msg}
                        </p>
                    ))}
                </div>
                <div className="send-message">
                    <textarea value={this.state.msg} onChange={this.handleMessageInput}></textarea>
                    <button onClick={this.handleSend}>Send</button>
                </div>
            </div>
        );
    }
}

ChatWindow.propTypes = {
    sendMessage: PropTypes.func,
    history: PropTypes.arrayOf(PropTypes.object)
};

export default ChatWindow;
