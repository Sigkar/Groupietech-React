import React, { Component } from 'react';
import styled from 'styled-components';
import Location from '../Images/123mainstreet.jpg';
import Map from '../Images/maps.png';

import Logo from '../Images/gtico.png';

/* Input */

export const LogoImageMain = styled.img`
    width:100px;
    position:relative;
    left:calc(50% - 50px);
    margin-top:10px;
`;

export const InputLabel = styled.label`
    width:90%;
    margin:3px 5%;
    text-align:left;
`;

export const InputText = styled.input`
    width:calc(90% - 13px);
    padding:3px 6px;
    margin:10px 5%;

    font-size:18px;
    height:24px;
    line-height:24px;
    background-color:#f0f0f0;
    outline:none;

    border:none !important;
    border-bottom:1px solid #eeeeee;
    border-right:1px solid #eeeeee;
`;

export const BigSubmit = styled.button`
    width:150px;
    height:50px;
    border:none;
    outline:none;
    font-size:30px;
    color:#f0f0f0;
    position:relative;
    left:calc(50% - 75px);
    cursor:pointer;

    transition:filter 0.2s ease;
    -ms-transition:filter 0.2s ease;
    -moz-transition:filter 0.2s ease;
    -webkit-transition:filter 0.2s ease;
    -o-transition:filter 0.2s ease;

    :hover{
        filter:brightness(1.1);
    }
`
export const SigninModal = styled.div`
    width:90%;
    max-width:400px;
    height:80%;
    position:relative;
    top:10%;
    margin:0 auto;
    background-color:white;
    overflow-y:auto;
    @media screen and (max-height:575px){
        height:95%;
        top:2.5%;
    }
`;

/* Optional Texts */
export const BigHeader = styled.h2`
    letter-spacing: 4px;
    text-align:center;
`
export const HeaderLeftPad = styled.h2`
    letter-spacing:4px;
    text-align:left;
    position:relative;
    margin:0;
    padding-left:5%;
`;
export const ProfileList = styled.ul`
    width:70%;
    position:relative;
    left:15%;
    padding:20px 0px 20px 0px;
`;
export const PC = styled.li`
    width:100%;
    margin:0px 0px 10px 0px;
    padding:0;
`;
export const InnerPC = styled.p`
    :before{
        content:"-";
    }
    width:95%;
    padding:0;
`

/*
  A regular card title, which can be used on anything but the full card title.
 */
export const CardTitle = styled.h2`
    letter-spacing: 4px;
    text-align:center;
`;

export const CardDate = styled.p`
    letter-spacing: 4px;
    text-align:center;
`;

export const CardData = styled.p`
    letter-spacing: 4px;
    text-align:center;
`;
export const ShortCardHeaderImage = styled.div`
    width:50px;
    height:50px;
    overflow:hidden;
`;
export const ShortCardHeaderTitle = styled.div`
    width:calc(100% - 50px);
    height:50px;
`;
/*
    The main "Full Header" card title.
 */
export const FullCardTitle = styled.h2`
    width:80%;
    padding-left:10%;
    height:50px;
    line-height:50px;
    font-size:32px;
    letter-spacing:3px;
`;
export const CardImageData = styled.img`
    max-height:100%;
    max-width:100%;
    background-position:center center;
    background-size:cover;
`;
export const ShortCardImage = styled.img`
    height:48px;
    width:48px;
`;
export const ShortCardTitle = styled.p`
    text-align:center;
    width:calc(98.5% - 48px);
    position:relative;
    left:1.5%;
    height:48px;
    line-height:50px;
    margin:0;
    padding:0;
    font-size:18px;
`;

export const VenueImage = styled.img`
    width:200px;
    height:200px;
`

export const BottomBorder = styled.div`
    border-bottom:2px solid;
`

export const RemainingContent = styled.div`
    width:calc(100% - 200px);
    height:200px;
`;
export const SectionTitle = styled.div`
    height:40px;
    line-height:40px;
    width:calc(50% - 12px);
    margin:20px 0px;

    border:0px;
    border-right:6px solid;
    border-left:6px solid;
    border-color:rgba(191, 63, 63, 1);
    border-image: linear-gradient(to bottom, rgba(255, 84, 5, 1) 25%,rgba(239, 0, 107, 1) 25%, rgba(239, 0, 107, 1) 50%, rgba(175, 0, 103, 1) 50%, rgba(175, 0, 103, 1) 75%, rgba(10, 193, 255, 1) 75%) 5;
    *{
        margin:none;
        padding:none;
        height:auto;
        text-align:center;
    }
    @media screen and (max-width:800px){
        height:30px;
        line-height:30px;
        width:66.66%;
    }
`
export const ModalTitle = styled.h1`
    text-align:center;
`;
export class ModalPopSignIn extends Component{
    render(){
        return(
            <SigninModal className="Thicc">
                <LogoImageMain src={Logo}/>
                <ModalTitle>
                    Find artists, get new fans,<br/>
                    Be the <span className="Pink">Headlinerr</span>
                </ModalTitle>
                <InputLabel>
                    Username
                </InputLabel>
                <InputText placeholder="Username" type="text"/>
                <InputLabel>
                    Password
                </InputLabel>
                <InputText placeholder="Password" type="password"/>
                <br/><br/><br/>
                <BigSubmit className="Red-bg">
                    Sign In
                </BigSubmit>
                <section className="center-text">
                    <br/>
                    <a href="/signup" className="Red">Need an Account?</a>
                    <br/><br/>
                    <a href="/" className="Red">Forgot Password</a>
                </section>
                <br/>
            </SigninModal>
        )
    }
}
export class ModalPopSignUp extends Component{
    render(){
        return(
            <SigninModal className="Thicc">
                <LogoImageMain src={Logo}/>
                <ModalTitle>
                    Find artists, get new fans,<br/>
                    Be the <span className="Pink">Headlinerr</span>
                </ModalTitle>
                <br/>
                <p>Sign up Today</p>
                <br/>
                <InputLabel>
                    Username
                </InputLabel>
                <InputText placeholder="Username" type="text"/>
                <InputLabel>
                    Password
                </InputLabel>
                <InputText placeholder="Password" type="password"/>
                <br/><br/><br/>
                <BigSubmit className="Red-bg">
                    Sign Up
                </BigSubmit>
                <section className="center-text">
                    <br/>
                    <a href="/signup" className="Red">Need an Account?</a>
                    <br/><br/>
                    <a href="/" className="Red">Forgot Password</a>
                </section>
                <br/>
            </SigninModal>
        )
    }
}
export class ShortCard extends Component{
    constructor(props){
        super(props);
        console.log("ShortCard has been called, constructing");
        
    }
    render(){
        return(
            <div className="Full-Short-Card Card-Red-Blue-Pink-Border">
                <ShortCardHeaderImage>
                    <BottomBorder>
                        <ShortCardImage src={Location} alt="Some Text" className="Card-Red-Blue-Pink-Border"/>
                    </BottomBorder>
                </ShortCardHeaderImage>
                <ShortCardHeaderTitle>
                    <BottomBorder className="Card-Red-Blue-Pink-Border White-bg">
                        <ShortCardTitle>{this.props.band} @ {this.props.venue}</ShortCardTitle>
                    </BottomBorder>
                </ShortCardHeaderTitle>
                <VenueImage src={Map} alt="Location of Venue"/>
                <RemainingContent className="Lightgray-bg"></RemainingContent>
            </div>
        )
    }
}