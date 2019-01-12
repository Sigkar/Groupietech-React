import React, { Component } from 'react';

import { FeatureHeader } from '../../Components/cards.js';
import { TextInput, StandardButton, ReturnMessage } from '../../Components/global.js';
import { BigHeader } from '../../Components/content.js';
import LoginImg from '../../Images/login-comp.jpeg';


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
    async handleSubmit(event) {
        event.preventDefault();
        event.stopPropagation();
        var message = null;
        message = await this.signInUser(this.state.email, this.state.password).then(function(Response){
            console.log(Response);
            if(Response !== undefined){
                return true;
            }else{
                return false;
            }
        }).catch(function(error){
            throw error;
        });
        if (!message) {
            this.setMessage("Username or Password is Incorrect");
        } else {
            this.setMessage("You will be redirected");
            setTimeout(function () { window.location = "/" }, 1500);
        }
    }
    setMessage(_message) {
        this.setState({
            message: _message,
            messageOpen: true,
        })
    }
    async signInUser(email, password) {
        return new Promise(function (resolve) {
            
            firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
                .then(function () {
                    var authenticate = firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error){
                        resolve(false, error);
                    });
                    resolve(authenticate);
                    
                })
                .catch(function (error) {
                    resolve(false, error);
                })
        }).catch(function(error){
            throw error;
        })
    };

    friendlyMessageToggle = () => (this.state.messageOpen ? this.setState({ messageOpen: false }) : this.setState({ messageOpen: true }), setTimeout(function () { this.setState({ openMessage: false }) }, 3000));
    render() {
        const { messageOpen, message } = this.state;
        return (
            <div className="Just-Flex Darkgray-bg Fill-Height">
                <ReturnMessage message={message} functionOption={messageOpen ? "open" : "closed"} />
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