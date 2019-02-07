//React
import React, { Component } from 'react';
import styled from 'styled-components';
import posed from 'react-pose';

import WelcomeWebm from '../Images/welcomehq.webm';
import {ModalPopSignIn, ModalPopSignUp} from '../Components/content.js';


const OnScreen = posed.div({
    open: {
        x: '0px',
        transition: {
            duration: 400,
        }
    },
    closed: {
        x: '-100vw',
        transition: {
            duration: 400,
        }
    }
})
const FlexContain = styled.div`
    display:flex;
    justify-content:space-around;
    width:100%;
    min-height:100vh;
`;
const HalfWidth = styled.div`
    width:45%;
    margin-left:5%;
`;

const VerticalCenter = styled.div`
    position:relative;
    top:50%;
    transform:translateY(-50%);
`;
const Title = styled.h1`
    font-size:50px;
    text-align:center;
    margin:10px 5%;
    padding:0px;
`;
const Subtitle = styled.h2`
    font-size:30px;
    text-align:Center;
    margin:10px 5%;
    padding:0px;
`;


const MainTitle = () => (
    <HalfWidth>
        <Title className="White">
            Find bands<br/>
            get fans<br/>
            <span className="Pink">Be a Headliner</span>
            </Title>
    </HalfWidth>
)

export class WelcomePage extends Component {
    constructor(props){
        super(props);
        this.state = {
            signInOpen:true,
        };
    }
    toggleSignIn = () => (this.state.signInOpen ? this.setState({ signInOpen: false }) : this.setState({signInOpen: true}), console.log("Running") );
    render() {
        const {signInOpen } = this.state;
        return (
            <div className="Video-Container">

                <video className="Video-Welcome" muted loop autoPlay>
                    <source src={WelcomeWebm} type="video/webm" />
                    Your browser does not support Webm :(
                </video>
                <div className="Video-Cover">
                    <OnScreen pose={signInOpen ? 'open' : 'closed'}>
                        <ModalPopSignIn funcOption={this.toggleSignIn}/>
                    </OnScreen>
                    <OnScreen pose={signInOpen ? 'closed' : 'open'}>
                        <ModalPopSignUp funcOption={this.toggleSignIn}/>
                    </OnScreen>
                </div>
            </div>
        )
    }
}