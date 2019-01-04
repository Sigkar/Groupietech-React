import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import styled from 'styled-components';
import MaterialIcon, {colorPalette} from 'material-icons-react';

import { Home } from '../Pages/feed/home.js';
import { Auth } from '../Pages/profilemanagement/auth.js';

import Logo from '../Images/icon.png';

const HomePage = () => <Home/>;
const AuthPage = () => <Auth/>;

export const Spacer = styled.div`
    height:60px;
    width:100%;
    clear:both;
    display:block;
    background:#ffffff;
`;
export const SpacerTitle = styled.p`
    height:60px;
    width:140px;

    position:relative;
    left:60px;
    line-height:60px;
    margin:0;
    padding:0;

    letter-spacing:2px;
`;
export const LogoImage = styled.img`
    position:fixed;
    top:0px;
    left:0px;
    z-index:10000;
    width:60px;
    height:60px;
    border-bottom-right-radius:5px;
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

export class FunctionIcon extends Component{
    render(){
        return(
            <FunctionalIcon onClick={this.props.functionOption} className={"Lightblue-hover White-children Functional-Icon-Child " + this.props.classOption}>
                <MaterialIcon icon={this.props.navIcon}/>
            </FunctionalIcon>
        )
    }
}

export class NavItem extends Component{
    render(){
        return(
            <NavStyleLink>
                <Link to={this.props.link} onClick={this.props.navState}>
                    <NavigationTileContainer className="Lightblue-hover">
                        <div className={"NavTile Darkgray-bg " + this.props.classOption} >
                            <NavigationIcon className=" White-children Icon-Child">
                                <MaterialIcon icon={this.props.navIcon}/>
                            </NavigationIcon>
                        </div>
                        <NavContent className="White">{this.props.navTitle}</NavContent>
                    </NavigationTileContainer>
                </Link>
            </NavStyleLink>
        )
    }
}

export class Navigation extends Component{
    render(){
        return(
            <div id="Main-Container">
                <LogoImage src={Logo} alt="Groupietech Logo"/>
                <Route path="/" exact component={HomePage}/>
                <Route path="/login" exact component={AuthPage}/>
            </div>
        )
    }
}

