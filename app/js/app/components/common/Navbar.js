import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <NavLink
                    activeClassName="selected"
                    to="/"
                    exact
                    strict
                    className="nav-link"
                >
                    Home
                </NavLink>
                <NavLink
                    activeClassName="selected"
                    to="/about"
                    exact
                    strict
                    className="nav-link"
                >
                    About
                </NavLink>
                <NavLink
                    activeClassName="selected"
                    to="/report"
                    exact
                    strict
                    className="nav-link"
                >
                    Report
                </NavLink>
                <NavLink
                    activeClassName="selected"
                    to="/chat"
                    exact
                    strict
                    className="nav-link"
                >
                    Chat
                </NavLink>
            </div>
        );
    }
}

export default Navbar;
