import React, { Component } from 'react';
import { Navigation, NavBar } from '../Components/navigation.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export class Main extends Component{
    render(){
        return(
        <div className="App">
            <div className="App-header">
                <Router>
                    <section className="Content-Container">    
                        <Navigation/>
                        <NavBar/>
                    </section>
                </Router>
            </div>
        </div>
        )
    }
}