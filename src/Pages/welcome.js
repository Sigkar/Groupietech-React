//React
import React, { Component } from 'react';
import WelcomeWebm from '../Images/welcomehq.webm';

export class WelcomePage extends Component {

    render() {
        return (
            <div className="Video-Container">

                <video onloadeddata="this.play();" className="Video-Welcome" muted loop autoPlay>
                    <source src={WelcomeWebm} type="video/webm" />
                    Your browser does not support Webm :(
                </video>
                <div className="Video-Cover">
                    
                </div>
            </div>
        )
    }
}