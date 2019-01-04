import React, { Component } from 'react';
import { Navigation, FunctionIcon, NavItem, Spacer, SpacerTitle} from '../Components/navigation.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import posed from 'react-pose';

const Popout = posed.div({
    open: {
        x:'0px',
        delay: 50,
        transition:{
            duration: 350,
        }
    },
    closed: {
        x:'-230px',
        delay: 50,
        transition:{
            duration: 350,
        }
    },
});
const SwapVisible = posed.div({
    open:{
        x:'0px',
        transition:{
            duration:300,
        }
    },
    closed:{
        x:'-200px',
        transition:{
            duration:300,
        }
    }
});
const ShowClose = posed.div({
    open:{
        x:'140px',
        transition:{
            duration:300,
        }
    },
    closed:{
        x:'-200px',
        transition:{
            duration:300,
        }
    }
})

class NavBar extends Component{
    render(){
        return(
            <div className="Darkgray-bg NavigationContainment">
                <Spacer>
                    <SpacerTitle>GROUPIETECH</SpacerTitle>
                </Spacer>
                <NavItem navState={this.props.navState} link="/" navIcon="queue_music" navTitle="QUEUE"/>
                <NavItem navState={this.props.navState} link="/" navIcon="calendar_today" navTitle="LOCAL GIGS"/>
                <NavItem navState={this.props.navState} link="/" navIcon="supervisor_account" navTitle="MANAGER"/>
                <NavItem navState={this.props.navState} link="/" navIcon="track_changes" navTitle="FIND BANDS"/>
                <NavItem navState={this.props.navState} link="/login" navIcon="account_circle" navTitle="ACCOUNT"/>
            </div>
        )
    }
}

export class Main extends Component{
    state = { isOpen: false, navigationOption:false};

    toggle = () => (this.state.isOpen ? this.setState({ isOpen: false }) : this.setState({ isOpen: true }), this.state.navigationOption ? this.setState({ navigationOption: false}) : this.setState({ navigationOption:true }));

    render(){
        const { isOpen, navigationOption } = this.state;
        return(
            <div className="App">
                <div className="App-header">
                    <Router>
                        
                        <div id="Complete-App">
                            <div className="Nav-Container">
                                <Popout pose={ isOpen ? 'open' : 'closed' }>
                                    <NavBar navState={this.toggle}/>
                                </Popout>
                            </div>
                            <section className="Content-Container">    
                                <Navigation/>
                            </section>   
                        </div>
                    </Router>
                </div>
                <SwapVisible pose={navigationOption ? 'closed' : 'open'}>
                    <FunctionIcon navIcon="menu" classOption="Open-Menu" functionOption={this.toggle}/>
                </SwapVisible>
                <ShowClose pose={navigationOption ? 'open' : 'closed'}>
                    <FunctionIcon navIcon="close" classOption="Close-Menu" functionOption={this.toggle}/>
                </ShowClose>
            </div>
        )
    }
}