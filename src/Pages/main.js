import React, { Component } from 'react';
import { Navigation, FunctionIcon, NavItem, Spacer, SpacerTitle, HeaderIcon } from '../Components/navigation.js';
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Popout, SwapVisible, Fade, HoverScale, OpenCloseButton, StaggerPauseThenQuick } from '../Components/staticposes.js';
import { HeaderButtonContainer, ModalOverlay, HeaderButton } from '../Components/global.js';
import LoginImage from '../Images/login-comp.jpeg';
import firebase from "firebase/app";


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
    // eslint-disable-next-line
    toggle = () => (this.state.isOpen ? this.setState({ isOpen: false }) : this.setState({ isOpen: true }), this.state.navigationOption ? this.setState({ navigationOption: false }) : this.setState({ navigationOption: true }));
    openSignup = () => (this.state.signup ? this.setState({ signup: false }) : this.setState({ signup: true }));
    openSignin = () => (this.state.signin ? this.setState({ signin: false }) : this.setState({ signup: true }));
    componentWillMount() {
        var config = {
            apiKey: "AIzaSyCfmatyhFmtKBLrQc0HMUWk59cmEkbKRrg",
            authDomain: "groupietech.firebaseapp.com",
            databaseURL: "https://groupietech.firebaseio.com",
            projectId: "groupietech",
            storageBucket: "groupietech.appspot.com",
            messagingSenderId: "1071869820233"
        };
        firebase.initializeApp(config);
    }
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
                                <OpenCloseButton pose={navigationOption ? 'open' : 'closed'}>
                                    <FunctionIcon navIcon="chevron_left" classOption="Open-Menu Darkgray-children" functionOption={this.toggle} />
                                </OpenCloseButton>

                                <HeaderButtonContainer>
                                    <Link to="/signup">
                                        <HeaderButton>
                                            SIGN UP
                                        </HeaderButton>
                                    </Link>
                                    <Link to="/signin">
                                        <HeaderButton>
                                            SIGN IN
                                        </HeaderButton>
                                    </Link>
                                    {/* <HoverScale>
                                        <Link to="/profile">
                                            <HeaderIcon iconOption="account_circle" classOption="Darkgray-children Header-Icon" />
                                        </Link>
                                    </HoverScale> */}
                                </HeaderButtonContainer>
                            </div>
                            <div className="Nav-Container">
                                <Popout pose={isOpen ? 'open' : 'closed'}>
                                    <StaggerPauseThenQuick>
                                        <NavBar navState={this.toggle} />
                                    </StaggerPauseThenQuick>
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