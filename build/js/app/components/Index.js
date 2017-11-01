import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Index extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Me page</h1>
                <Link to='/about'>About</Link>
                {/* {this.props.children} */}
            </div>
        );
    }
}

export default Index;
