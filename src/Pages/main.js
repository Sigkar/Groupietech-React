import React, { Component } from 'react';
import { Navigation, FunctionIcon, NavItem, Spacer, SpacerTitle, HeaderIcon } from '../Components/navigation.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Popout, SwapVisible, Fade, PopFromNothing } from '../Components/staticposes.js';
import { HeaderButton, HeaderButtonContainer, LogModal, Overlay, HalfModal, ModalOverlay } from '../Components/global.js';
import LoginImage from '../Images/login-comp.jpeg';

class NavBar extends Component {
    render() {
        return (
            <div className="Darkgray-bg NavigationContainment">
                <Spacer>
                    <SpacerTitle>HEADLINERR</SpacerTitle>
                </Spacer>
                <NavItem navState={this.props.navState} link="/" navIcon="queue_music" navTitle="QUEUE" />
                <NavItem navState={this.props.navState} link="/gigs" navIcon="calendar_today" navTitle="LOCAL GIGS" />
                <NavItem navState={this.props.navState} link="/manager" navIcon="supervisor_account" navTitle="MANAGER" />
                <NavItem navState={this.props.navState} link="/discover" navIcon="track_changes" navTitle="FIND BANDS" />
                
            </div>
        )
    }
}

export class Main extends Component {
    state = { isOpen: false, navigationOption: false, signup: false, signin: false };

    toggle = () => (this.state.isOpen ? this.setState({ isOpen: false }) : this.setState({ isOpen: true }), this.state.navigationOption ? this.setState({ navigationOption: false }) : this.setState({ navigationOption: true }));
    openSignup = () => (this.state.signup ? this.setState({ signup: false }) : this.setState({ signup: true}));
    openSignin = () => (this.state.signin ? this.setState({ signin: false }) : this.setState({ signup: true}));
    
    render() {
        const { isOpen, navigationOption, signup, signin } = this.state;
        return (
            <div className="App">
                <div className="App-header">
                    <Fade pose={signup ? 'open' : 'closed'}>
                        <ModalOverlay 
                            functionOption={this.openSignup} 
                            leftimg={LoginImage}
                            title="CREATE ACCOUNT"
                        />
                    </Fade>
                    <Fade pose={signin ? 'open' : 'closed'}>
                        <ModalOverlay 
                            functionOption={this.openSignup} 
                            leftimg={LoginImage}
                            title="SIGN IN"
                        />
                    </Fade>
                    <Router>
                        <div id="Complete-App">
                            <div className="Header-Bar">
                                <SwapVisible pose={navigationOption ? 'closed' : 'open'}>
                                    <FunctionIcon navIcon="menu" classOption="Open-Menu Darkgray-children" functionOption={this.toggle} />
                                </SwapVisible>
                                <SwapVisible pose={navigationOption ? 'open' : 'closed'}>
                                    <FunctionIcon navIcon="close" classOption="Open-Menu Darkgray-children" functionOption={this.toggle} />
                                </SwapVisible>
                                <HeaderButtonContainer>
                                    {/* 
                                    // if unauthed
                                    <HeaderButton onClick={this.openSignup}>
                                        SIGN UP
                                    </HeaderButton>
                                        <HeaderButton onClick={this.openSignin}>
                                            SIGN IN
                                    </HeaderButton> 
                                */}
                                    <Link to="/profile">
                                        <HeaderIcon iconOption="account_circle" classOption="Darkgray-children Header-Icon" />
                                    </Link>
                                </HeaderButtonContainer>
                            </div>
                            <div className="Nav-Container">
                                <Popout pose={isOpen ? 'open' : 'closed'}>
                                    <NavBar navState={this.toggle} />
                                </Popout>
                            </div>
                            <section className="Content-Container">
                                <Navigation />
                            </section>
                        </div>
                    </Router>
                </div>
            </div>
        )
    }
}