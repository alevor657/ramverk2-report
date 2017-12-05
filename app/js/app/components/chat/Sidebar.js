import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Sidebar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="sidebar">
                <h3>Users:</h3>
                {this.props.users.map((user, i) => {
                    return (
                        <div className="username-wrapper" key={i}>
                            <p>{user}</p>
                        </div>
                    );
                })}
            </div>
        );
    }
}

Sidebar.propTypes = {
    users: PropTypes.arrayOf(PropTypes.string)
};

export default Sidebar;
