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
const SwapVisible = posed.div({
    open:{
        display:'block',
        transition:{
            duration:350,
        },
    },
    closed:{
        display:'none',
        transition:{
            duration:350,
        },
    }
});



export class Main extends Component{
    state = { isOpen: false, navigationOption:false};

    toggle = () => (this.state.isOpen ? this.setState({ isOpen: false }) : this.setState({ isOpen: true }), this.state.navigationOption ? this.setState({ navigationOption: true}) : this.setState({ navigationOption:false }));

    render(){
        const { isOpen, navigationOption } = this.state;
        return(
            <div className="App">
                <div className="App-header">
                <SwapVisible pose={navigationOption ? 'closed' : 'open'}>
                    <FunctionIcon navIcon="menu" classOption="Open-Menu" functionOption={this.toggle}/>
                </SwapVisible>
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