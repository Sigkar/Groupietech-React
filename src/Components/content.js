import React, { Component } from 'react';
import styled from 'styled-components';
import Location from '../Images/123mainstreet.jpg';
import Map from '../Images/maps.png';

import Logo from '../Images/gtico.png';


import firebase from 'firebase/app';
import 'firebase/auth';


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
    @media screen and (max-height:700px){
        height:18px;
        line-height:18px;
        padding:2px 6px;
        margin:5px 5%;
        
        font-size:16px;
    }
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

export const SmallButton = styled.button`
    width:120px;
    height:40px;
    border:none;
    outline:none;
    font-size:12px;
    color:#f0f0f0;
    position:relative;

    left:50%;
    transform:translateX(-50%);
    
    cursor:pointer;

    color:#0c0c0c;
    background:#e8e8e8;
    transition:filter 0.2s ease;
    -ms-transition:filter 0.2s ease;
    -moz-transition:filter 0.2s ease;
    -webkit-transition:filter 0.2s ease;
    -o-transition:filter 0.2s ease;

    :hover{
        filter:brightness(0.8);
    }
`;
export const SigninModal = styled.div`
    width:50vw;
    max-width:450px;
    min-width:340px;
    height:80vh;
    position:absolute;
    top:10vh;
    left:50%;
    transform:translateX(-50%);
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
export class ModalPopSignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            message: '',
            messageOpen: false
        };
        this.baseState = this.state;
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
        console.log("Updated");
    }
    setMessage(_message) {
        this.setState({
            message: _message,
            messageOpen: true,
        })
    }
    async handleSubmit(event) {
        event.preventDefault();
        event.stopPropagation();
        let respond = await this.signInUser(this.state.email, this.state.password);
        if (respond === undefined || !respond) {
            this.setMessage("Username or Password is Incorrect")
        } else {
            this.setMessage("Welcome back! You will be redirected.");
        }
    }
    signInUser(email, password) {
        return new Promise(function (resolve) {
            firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(function () {
                const auth = firebase.auth().signInWithEmailAndPassword(email, password).catch(function (e) { console.assert(e) });
                resolve(auth);
            }).catch(function (e) { console.assert(e); });
        }).catch(function (e) { console.assert(e) });
    };


    render() {
        return (
            <SigninModal className="Thicc">
                <LogoImageMain src={Logo} />
                <form
                    onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); } }}
                    onSubmit={this.handleSubmit.bind(this)}
                >
                    <InputLabel>
                        Email
                </InputLabel>
                    <InputText
                        placeholder="Email"
                        name="email"
                        type="email"
                        value={this.state.email}
                        onChange={this.handleInputChange}
                        required
                    />
                    <InputLabel>
                        Password
                </InputLabel>
                    <InputText
                        placeholder="Password"
                        name="password"
                        type="password"
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        required
                    />
                    <br /><br /><br />
                    <BigSubmit className="Red-bg" type="submit">
                        Sign In
                </BigSubmit>
                </form>
                <br />
                <SmallButton onClick={this.props.funcOption}>Need an Account?</SmallButton>
                <br /><br />
                <SmallButton>Forgot Password?</SmallButton>
                <br />
            </SigninModal>
        )
    }
}
/**
 * Author - Duncan Pierce
 * Purpose - Signs the User Up
 * Usage - Drop this as a modal under a transparent toggle with React Pose.
 */
export class ModalPopSignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            confirmPassword: '',
            message: '',
            messageOpen: false
        };
        this.baseState = this.state;


        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    resetForm = () => {
        this.setState(this.baseState)
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }
    handleSubmit(event) {
        event.preventDefault();
        event.stopPropagation();
        if (this.state.password !== this.state.confirmPassword) {
            console.log("Passwords dont match, exiting");
            this.setState({
                message: "Passwords did not match. Please input again!",
                messageOpen: true,
            })
            return false;
        }
        console.log("Creating user");
        this.createUser();
        this.setState({
            message: "Thanks for signing up, you will be redirected!",
            messageOpen: true,
        })
    }
    createUser = () => (
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).catch(function (error) {
            let errorMessage = error.message;
            this.setState({
                message: errorMessage,
                messageOpen: true,
            });
        })
    );

    render() {
        return (
            <SigninModal className="Thicc">
                <LogoImageMain src={Logo} />
                <ModalTitle>
                    Find artists, get new fans,<br />
                    Be the <span className="Pink">Headlinerr</span>
                </ModalTitle>
                <br />
                <form
                    onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); } }}
                    onSubmit={this.handleSubmit.bind(this)}
                >
                    <InputLabel>
                        Email
                </InputLabel>
                    <InputText placeholder="Email" type="text" name="email"
                        type="email"
                        value={this.state.email}
                        onChange={this.handleInputChange}
                        required
                    />
                    <InputLabel>
                        Password
                </InputLabel>
                    <InputText placeholder="Password" type="password" name="password"
                        type="password"
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        required
                    />
                    <InputLabel>
                        Confirm Password
                </InputLabel>
                    <InputText placeholder="Confirm Password" name="confirmPassword"
                        type="password"
                        value={this.state.confirmPassword}
                        onChange={this.handleInputChange}
                        required
                    />
                    <br /><br /><br />
                    <BigSubmit className="Red-bg" type="submit">
                        Sign Up
                    </BigSubmit>
                    <br /><br/>
                    <SmallButton onClick={this.props.funcOption}>Sign In</SmallButton>
                    <br />
                </form>
            </SigninModal>
        )
    }
}
export class ShortCard extends Component {
    render() {
        return (
            <div className="Full-Short-Card Card-Red-Blue-Pink-Border">
                <ShortCardHeaderImage>
                    <BottomBorder>
                        <ShortCardImage src={Location} alt="Some Text" className="Card-Red-Blue-Pink-Border" />
                    </BottomBorder>
                </ShortCardHeaderImage>
                <ShortCardHeaderTitle>
                    <BottomBorder className="Card-Red-Blue-Pink-Border White-bg">
                        <ShortCardTitle>{this.props.band} @ {this.props.venue}</ShortCardTitle>
                    </BottomBorder>
                </ShortCardHeaderTitle>
                <VenueImage src={Map} alt="Location of Venue" />
                <RemainingContent className="Lightgray-bg"></RemainingContent>
            </div>
        )
    }
}