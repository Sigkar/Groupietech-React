import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Navigation } from '../Components/navigation.js';


export class Main extends Component{
    render(){
        return(
        <div className="App">
            <header className="App-header">
                <Navigation/>
            </header>
        </div>
        )
    }
}