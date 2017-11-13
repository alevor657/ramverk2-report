import React, { Component } from 'react';

class About extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <h1>About page</h1>
                <p>Denna sidan är skapat i samband med kuser ramverk2 som jag läser på BTH.</p>
                <a target="_blank" href="https://github.com/alevor657/ramverk2-report" rel="noopener noreferrer">Github</a>
                <div className="gallery-container">
                    <div>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"/>
                    </div>
                    <div>
                        <img src="http://mean.io/wp-content/themes/twentysixteen-child/images/express.png"/>
                    </div>
                    <div>
                        <img src="https://cdn-images-1.medium.com/max/1920/1*gdoQ1_5OID90wf1eLTFvWw.png"/>
                    </div>
                    <div>
                        <img src="http://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
