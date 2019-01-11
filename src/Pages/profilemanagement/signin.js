import React, { Component } from 'react';

import { FeatureHeader } from '../../Components/cards.js';
import { TextInput, StandardButton } from '../../Components/global.js';
import { BigHeader } from '../../Components/content.js';
import LoginImg from '../../Images/login-comp.jpeg';

import { FriendlyMessage } from '../../Components/staticposes.js';

import firebase from 'firebase/app';
import 'firebase/auth';

export class SignIn extends Component {
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
    }
    handleSubmit(event) {
        event.preventDefault();
        event.stopPropagation();
        console.log(this.state.password);
        console.log(this.state.email);
        
        var user = this.signInUser();
        if(!user){
            this.setState({
                message: 'Username or Password Incorrect',
                messageOpen: true,
            });
            return false;
        }else{
            this.setState({
                message: 'You will be redirected',
                messageOpen: true,
            })
            setTimeout(function(){
                setTimeout("location.href = '/';",1500);
            },2500);
        }
    }
    signInUser() {
        var errorMessage
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
            .then(function () {
                return firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password);
            })
            .catch(function (error) {
                errorMessage = error.message;
            })
            return false;
    };

    friendlyMessageToggle = () => (this.state.messageOpen ? this.setState({ messageOpen: false }) : this.setState({ messageOpen: true }));
    render() {
        const { messageOpen, message } = this.state;
        return (
            <div className="Just-Flex Darkgray-bg Fill-Height">
                <FriendlyMessage className="alert Pink-bg White-children" pose={messageOpen ? "open" : "closed"}>
                    {message}
                </FriendlyMessage>
                <div className="Third-Width-Full-Height">
                    <img src={LoginImg} alt="Login Control" className="Cover" />
                </div>
                <div className="Fill-Remaining-Thirds">
                    <div className="Custom-Flex Force-Half Space-Around">
                        <FeatureHeader className="Darkgray-bg White-children Thicc White">
                            <BigHeader className="Very-Large">WELCOME BACK</BigHeader>
                            <br />
                            <BigHeader className="Very-Lage">SIGN IN AND GET BACK TO THE MUSIC</BigHeader>
                            <br />
                        </FeatureHeader>

                        <div id="SignUpModal">
                            <form
                                onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); } }}
                                onSubmit={this.handleSubmit.bind(this)}
                            >
                                <TextInput>
                                    <label className="Label-Controller">EMAIL</label>
                                    <br />
                                    <input
                                        name="email"
                                        type="email"
                                        value={this.state.email}
                                        onChange={this.handleInputChange}
                                        required
                                    />
                                    <br />
                                    <label className="Label-Controller">PASSWORD</label>
                                    <br />
                                    <input
                                        name="password"
                                        type="password"
                                        value={this.state.password}
                                        onChange={this.handleInputChange}
                                        required
                                    />
                                    <br />
                                </TextInput>
                                <StandardButton className="Red Bold White-bg" type="submit">SIGN IN</StandardButton>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}