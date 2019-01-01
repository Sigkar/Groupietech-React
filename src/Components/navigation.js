import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import styled from 'styled-components';
import MaterialIcon, {colorPalette} from 'material-icons-react';

import { Home } from '../Pages/home.js';
import { Auth } from '../Pages/auth.js';

import Logo from '../Images/icon.png';

const HomePage = () => <Home/>;
const AuthPage = () => <Auth/>;

const LogoImage = styled.img`
    margin-top:0px !important;
    width:60px;
    height:60px;
    -webkit-box-shadow: 3px 3px 4px 0px rgba(133,133,133,0.4);
    -moz-box-shadow: 3px 3px 4px 0px rgba(133,133,133,0.4);
    box-shadow: 3px 3px 4px 0px rgba(133,133,133,0.4);
`;
const NavigationIcon = styled.i`
    height: 50px !important;
    width: 50px !important;
    font-size:40px;
    position:relative;
    left:5px;
    opacity:1;
    :hover{
        color: rgba(10, 193, 255, 1) !important;
    }
`;
const NavOption = styled.div`
    width:200px;
    height:50px;
    position:Relative;
    left:50px;
    top:-50px;
    background-color:mediumaquamarine;
`;
const SideBar = styled.nav`
    width:50px;
    height:100vh;
    position:fixed;
    left:0px;
    top:0px;
`;

class NavItem extends Component{
    render(){
        return(
            <Link to={this.props.link}>
                <div className={"NavTile Darkgray-bg " + this.props.classOption} >
                    <NavigationIcon className="Lightblue-hover White-children Icon-Child">
                        <MaterialIcon icon={this.props.navIcon}/>
                    </NavigationIcon>
                </div>
            </Link>
        )
    }
}

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
                    <LogoImage src={Logo} height="60px" width="60px" alt="Logo"/>
                </Link>
                <NavItem link="/" navIcon="queue_music"/>
                <NavItem link="/" navIcon="calendar_today"/>
                <NavItem link="/" navIcon="supervisor_account"/>
                <NavItem link="/" navIcon="track_changes"/>
                <NavItem link="/login" navIcon="account_circle" classOption="Account"/>
            </SideBar>
        )
    }
}
