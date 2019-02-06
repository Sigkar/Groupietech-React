import React, { Component } from 'react';
import { Navigation, FunctionIcon, NavItem, Spacer, SpacerTitle, HeaderIcon } from '../Components/navigation.js';
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Popout, SwapVisible, Fade, HideOnToggle, OpenCloseButton, StaggerPauseThenQuick } from '../Components/staticposes.js';
import { HeaderButtonContainer, ModalOverlay, HeaderButton } from '../Components/global.js';
import LoginImage from '../Images/login-comp.jpeg';
import firebase from 'firebase/app';
import 'firebase/auth';
import { getUserStatus } from '../async/getAuthStatus.js';
import { refStoragePrep } from '../async/uploads.js';
import {WelcomePage} from './welcome.js';

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

const HeaderOption = ({ _checkingAuth, _userState, _functionOption }) => {
    if (_checkingAuth || _userState !== []) {

        if (_userState !== null) {
            return (
                <span id="Header-Options">
                    <HeaderButton className="Account-Logged" onClick={_functionOption}>
                        LOG OUT
                        </HeaderButton>
                    <Link to="/profile">
                        <HeaderIcon iconOption="account_circle" classOption="Darkgray-children Header-Icon" />
                    </Link>
                </span>
            )
        } else {
            return (
                <span id="Header-Options">
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
                </span>
            )
        }
    } else {
        return (
            <div></div>
        )
    }
};

export class Main extends Component {
    state = { isOpen: false, navigationOption: false, signup: false, signin: false, checkingAuth: false, userState: '' };
    // eslint-disable-next-line
    toggle = () => (this.state.isOpen ? this.setState({ isOpen: false }) : this.setState({ isOpen: true }), this.state.navigationOption ? this.setState({ navigationOption: false }) : this.setState({ navigationOption: true }));
    openSignup = () => (this.state.signup ? this.setState({ signup: false }) : this.setState({ signup: true }));
    openSignin = () => (this.state.signin ? this.setState({ signin: false }) : this.setState({ signup: true }));
    logOutAccount = () => {
        firebase.auth().signOut().then(function () {
            console.log("Sign-out successful.");
            setTimeout(function () {
                window.location.reload();
            }, 1000);
        }, function (error) {
            console.log("Couldn't sign you out");
        });
    }
    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => this.setState({ userState: user, checkingAuth: false }))
        refStoragePrep();
        console.log("Welcome to Headlinerr");
        console.log("'As you can see, this is what it has come to.'");
        console.log("If you steal this I will be sad");
        console.log("Don't expect this shizzle to work. Thats up to your own judgement if it works. I consider it a feature.");
    }
    render() {
        const { isOpen, navigationOption, signup, signin, checkingAuth, userState } = this.state;
        if (userState != null && userState) {
            try {
                userState.providerData.forEach(function (e) {
                    console.log("Honestly, if you signed up legit, send me an email at telmage4448@gmail.com");
                    console.log("I'll probably pop some sort of champagne");
                    console.log("UID: " + e.uid);
                    console.log("Email: " + e.email);
                })
            } catch (error) {
                console.assert(error);
            } return (
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
                                        <FunctionIcon navIcon="menu" classOption="Open-Menu Darkgray-children Always-top" functionOption={this.toggle} />
                                    </SwapVisible>
                                    <OpenCloseButton pose={navigationOption ? 'open' : 'closed'}>
                                        <FunctionIcon navIcon="chevron_left" classOption="Open-Menu Darkgray-children Always-top" functionOption={this.toggle} />
                                    </OpenCloseButton>
                                    <HideOnToggle pose={navigationOption ? 'closed' : 'open'}>
                                        <HeaderButtonContainer>
                                            <HeaderOption _checkngAuth={checkingAuth} _userState={userState} _functionOption={this.logOutAccount} />
                                        </HeaderButtonContainer>
                                    </HideOnToggle>
                                </div>
                                <div className="Nav-Container">
                                    <Popout pose={isOpen ? 'open' : 'closed'}>
                                        <StaggerPauseThenQuick>
                                            <NavBar userState={this.userState} navState={this.toggle} />
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
        } else {
            return (
                <WelcomePage/>
            )
        }
    }
}