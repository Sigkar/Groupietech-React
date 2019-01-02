import React, { Component } from 'react';
import { Navigation, NavBar, FunctionIcon } from '../Components/navigation.js';
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
        x:'-300px',
        delay: 50,
        transition:{
            duration: 350,
        }
    },
});

export class Main extends Component{
    state = { isOpen: true};

    toggle = () => (this.state.isOpen ? this.setState({ isOpen: false }) : this.setState({ isOpen: true }));
    
    render(){
        const { isOpen } = this.state;
        return(
            <div className="App">
                <div className="App-header">
                <FunctionIcon navIcon="menu" classOption="Open-Menu" functionOption={this.toggle}/>
                    <Router>
                        <div id="Complete-App">
                            <Popout pose={ isOpen ? 'open' : 'closed' }>
                                <NavBar/>
                            </Popout>
                            <section className="Content-Container">    
                                <Navigation/>
                            </section>
                        </div>
                    </Router>
                </div>
            </div>
        )
    }
}