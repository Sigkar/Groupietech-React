import React, { Component } from 'react';

import { FeatureHeader } from '../../Components/cards.js';
import { TextInput, StandardButton } from '../../Components/global.js';
import { BigHeader } from '../../Components/content.js';
import LoginImg from '../../Images/login-comp.jpeg';

import * as firebase from 'firebase/app';

import 'firebase/auth';

export class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
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
        console.log("Signing user in");
        console.log(this.state.password);
        console.log(this.state.email);

        this.signInUser();
        this.resetForm();
    }
    signInUser = () => (
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
            .then(function () {
                return firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password);
            })
            .catch(function (error) {
                var errorCode = error.code;
                var errorMessage = error.message;
            })
        
    );
    render() {
        return (
            <div className="Just-Flex Darkgray-bg Fill-Height">
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