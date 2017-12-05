import React, { Component } from 'react';
import PropTypes from 'prop-types';

class GenerateNickname extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nick: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(e) {
        this.setState({
            nick: e.target.value
        });
    }

    handleClick() {
        this.props.saveNick(this.state.nick);

        this.setState({nick: ''});
    }

    render() {
        return (
            <div className="generate-nick">
                <p>Pick up a nick</p>
                <input type="text" onChange={this.handleChange} value={this.state.nick}/>
                <button onClick={this.handleClick}>Save</button>
            </div>
        );
    }
}

GenerateNickname.propTypes = {
    saveNick: PropTypes.func
};

export default GenerateNickname;
