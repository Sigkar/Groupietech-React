import React, { Component } from 'react';
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import styled from 'styled-components';
import MaterialIcon from 'material-icons-react';

import {LoadFade, HoverScale, StaggerChildren} from './staticposes.js';

import { Home } from '../Pages/feed/home.js';

import { Signup } from '../Pages/profilemanagement/signup.js';
import { SignIn } from '../Pages/profilemanagement/signin.js';

import { Gigs } from '../Pages/bandmanagement/gigs.js';
import { Manager } from '../Pages/bandmanagement/manager.js';
import { Discover } from '../Pages/feed/discover.js';
import { Profile } from '../Pages/profilemanagement/profile.js';


import Logo from '../Images/icon.png';

// Might eventually be used for hooks, and its for better swapping of components.
const HomePage = () => (
<StaggerChildren>
    <LoadFade>
        <Home/>
    </LoadFade>
</StaggerChildren>
);
const SignInPage = () => <SignIn/>;
const SignUpPage = () => <Signup/>;
const GigsPage = () => <Gigs/>;
const ManagerPage = () => <Manager/>;
const DiscoverPage = () => <Discover/>;
const ProfilePage = () => <Profile/>;


export const Spacer = styled.div`
    height:60px;
    width:100%;
    clear:both;
    display:block;
    background:#ffffff;
    @media screen and (max-width:800px){
        height:50px;
        border-bottom:none;
        box-shadow:none !important;
    }
`;
export const SpacerTitle = styled.p`
    height:60px;
    width:140px;

    position:relative;
    left:60px;
    line-height:60px;
    margin:0;
    padding:0;

    font-weight:700;

    letter-spacing:2px;
    @media screen and (max-width:800px){
        line-height:50px;
        left:50px;
    }
`;
export const LogoImage = styled.img`
    position:fixed;
    top:0px;
    left:0px;
    z-index:10000;
    width:60px;
    height:60px;
    @media screen and (max-width:800px){
        height:50px;
        width:50px;
    }
`;
export const NavigationIcon = styled.i`
    height: 40px !important;
    width: 40px !important;
    
    position:relative;
    left:10px;
    opacity:1;
    :hover{
        color: rgba(10, 193, 255, 1) !important;
    }
`;
export const FunctionalIcon = styled.div`
    height:45px !important;
    width: 45px !important;
    font-size:40px;
    z-index:2000;
    :hover{
        color: rgba(10, 193, 255, 1) !important;
    }
`
export const NavContent = styled.p`
    height:40px;
    width:145px;
    position:relative;
    left:45px;
    top:-50px;
    padding:0;
    margin:0;
    line-height:40px;
    text-decoration:none !important;
`
export const NavigationTileContainer = styled.nav`
    width:200px;
    height:50px !important;
    margin-top:0;
`;
export const NavStyleLink = styled.div`
    *{text-decoration:none !important;}
`

export class HeaderIcon extends Component{
    render(){
        return(
            <div className={"Lightblue-hover Functional-Icon-Child Fixed-Right " + this.props.classOption}>
                <MaterialIcon icon={this.props.iconOption}/>
            </div>
        )
    }
}
export class FunctionIcon extends Component{
    render(){
        return(
            <FunctionalIcon onClick={this.props.functionOption} className={"Lightblue-hover Functional-Icon-Child " + this.props.classOption}>
                <MaterialIcon icon={this.props.navIcon}/>
            </FunctionalIcon>
        )
    }
}

export class NavItem extends Component{
    render(){
        return(
            <NavStyleLink>
                <LoadFade>
                    <Link to={this.props.link} onClick={this.props.navState}>
                        <NavigationTileContainer className="Lightblue-hover">
                            <HoverScale>
                                <div className={"NavTile Darkgray-bg " + this.props.classOption} >
                                    <NavigationIcon className=" White-children Icon-Child">
                                        <MaterialIcon icon={this.props.navIcon}/>
                                    </NavigationIcon>
                                </div>
                                <NavContent className="White">{this.props.navTitle}</NavContent>
                            </HoverScale>
                        </NavigationTileContainer>
                    </Link>
                </LoadFade>
            </NavStyleLink>
        )
    }
}

export class Navigation extends Component{
    render(){
        return(
            <div id="Main-Container">
                <Link to="/">
                    <LogoImage src={Logo} alt="Groupietech Logo"/>
                </Link>
                <Route path="/" exact component={HomePage}/>
                <Route path="/signup" exact component={SignUpPage}/>
                <Route path="/signin" exact component = {SignInPage} />
                <Route path="/gigs" component={GigsPage}/>
                <Route path="/manager" component={ManagerPage}/>
                <Route path="/discover" component={DiscoverPage}/>
                <Route path="/profile" component={ProfilePage}/>
            </div>
        )
    }
}

