import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { Home } from '../Pages/home.js';
import { Auth } from '../Pages/auth.js';

import { SideBar, NavTile } from './content.js';

import Logo from '../Images/icon.png';

const HomePage = () => <Home/>;
const AuthPage = () => <Auth/>;

export class Navigation extends Component{
    render(){
        return(
            <div id="Main-Container">
                <Route path="/" exact component={HomePage}/>
                <Route path="/login" exact component={AuthPage}/>
            </div>
        )
    }
}
export class NavBar extends Component{
    render(){
        return(
            <SideBar className="Darkgray-bg">
                <Link to="/">
                    <NavTile>
                        <img src={Logo} height="60px" width="60px"/>
                    </NavTile>
                </Link>
            </SideBar>
        )
    }
}
