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
    border-bottom-right-radius:5px;
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
const FunctionalIcon = styled.div`
    height:50px !important;
    width: 50px !important;
    font-size:40px;
    :hover{
        color: rgba(10, 193, 255, 1) !important;
    }
`
const SideBar = styled.nav`
    width:250px;
    height:100vh;
    position:fixed;
    left:0px;
    top:0px;
    display:flex;
    flex-direction:column;
    flex-wrap: wrap;
`;
const NavContent = styled.p`
    height:50px;
    width:150px;
    position:relative;
    left:50px;
    top:-50px;
    padding:0;
    margin:0;
    line-height:50px;
`
const NavigationTileContainer = styled.nav`
    width:200px;
    height:50px !important;
    margin-top:0;
`;

export class FunctionIcon extends Component{
    render(){
        return(
            <FunctionalIcon onClick={this.props.functionOption} className={"Lightblue-hover White-children Icon-Child " + this.props.classOption}>
                <MaterialIcon icon={this.props.navIcon}/>
            </FunctionalIcon>
        )
    }
}

class NavItem extends Component{
    render(){
        return(
            <Link to={this.props.link}>
                <NavigationTileContainer>
                    <div className={"NavTile Darkgray-bg " + this.props.classOption} >
                        <NavigationIcon className="Lightblue-hover White-children Icon-Child">
                            <MaterialIcon icon={this.props.navIcon}/>
                        </NavigationIcon>
                    </div>
                    <NavContent className="White">{this.props.navTitle}</NavContent>
                </NavigationTileContainer>
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
                <NavItem link="/" navIcon="queue_music" navTitle="Your Queue"/>
                <NavItem link="/" navIcon="calendar_today" navTitle="Local Gigs"/>
                <NavItem link="/" navIcon="supervisor_account" navTitle="Manager"/>
                <NavItem link="/" navIcon="track_changes" navTitle="Find Bands"/>
                <NavItem link="/login" navIcon="account_circle" classOption="Account"/>
            </SideBar>
        )
    }
}
