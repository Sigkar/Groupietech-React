import React, { Component } from 'react';
import { Navigation, FunctionIcon, NavItem, Spacer, SpacerTitle } from '../Components/navigation.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Popout, SwapVisible, Fade, PopFromNothing } from '../Components/staticposes.js';
import { HeaderButton, HeaderButtonContainer, LogModal, Overlay } from '../Components/global.js';

class NavBar extends Component {
    render() {
        return (
            <div className="Darkgray-bg NavigationContainment">
                <Spacer>
                    <SpacerTitle>GROUPIETECH</SpacerTitle>
                </Spacer>
                <NavItem navState={this.props.navState} link="/" navIcon="queue_music" navTitle="QUEUE" />
                <NavItem navState={this.props.navState} link="/" navIcon="calendar_today" navTitle="LOCAL GIGS" />
                <NavItem navState={this.props.navState} link="/" navIcon="supervisor_account" navTitle="MANAGER" />
                <NavItem navState={this.props.navState} link="/" navIcon="track_changes" navTitle="FIND BANDS" />
                <NavItem navState={this.props.navState} link="/login" navIcon="account_circle" navTitle="ACCOUNT" />
            </div>
        )
    }
}

export class Main extends Component {
    state = { isOpen: false, navigationOption: false, signup: false, signin: false };

    toggle = () => (this.state.isOpen ? this.setState({ isOpen: false }) : this.setState({ isOpen: true }), this.state.navigationOption ? this.setState({ navigationOption: false }) : this.setState({ navigationOption: true }));
    openSignup = () => (this.state.signup ? this.setState({ signup: false }) : this.setState({ signup: true, signin: false }));
    openSignin = () => (this.state.signin ? this.setState({ signin: false }) : this.setState({ signup: false, signin: true }));
    render() {
        const { isOpen, navigationOption, signup, signin } = this.state;
        return (
            <div className="App">
                <div className="App-header">
                    <Fade pose={signup ? 'open' : 'closed'}>
                        <Overlay>
                            <PopFromNothing>
                                <LogModal className="White-bg">
                                    <FunctionIcon navIcon="close" classOption="Darkgray-children" functionOption={this.openSignup} />
                                    Sign Up
                                </LogModal>
                            </PopFromNothing>
                        </Overlay>
                    </Fade>
                    <Fade pose={signin ? 'open' : 'closed'}>
                        <Overlay>
                            <PopFromNothing>
                                <LogModal className="White-bg">
                                    <FunctionIcon navIcon="close" classOption="Darkgray-children" functionOption={this.openSignin} />
                                    Sign In
                            </LogModal>
                            </PopFromNothing>
                        </Overlay>
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
                                    <HeaderButton onClick={this.openSignup}>
                                        SIGN UP
                                </HeaderButton>
                                    <HeaderButton onClick={this.openSignin}>
                                        SIGN IN
                                </HeaderButton>
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