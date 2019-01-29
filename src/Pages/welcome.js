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
                    <br />
                    <br />
                    <div className="Onboard-Container White-bg Heavy-Box-Shadow">
                        <h1 className="Red">
                            TIME FOR LOCAL BANDS TO GET A KICK START.
                        <br />
                            YOUR LEGEND STARTS HERE.
                            <br/>
                            Hey, This isn't a dead end. I'm just
                            <br/>
                            <a href="/signin">Developing this page.</a>
                            <br/>
                            You can see the actual site once you've signed in.
                    </h1>
                    </div>
                </div>
            </div>
        )
    }
}