import React, { Component } from 'react';

import { FeatureHeader } from '../../Components/cards.js';
import { TextInput, StandardButton } from '../../Components/global.js';
import { BigHeader } from '../../Components/content.js';
import LoginImg from '../../Images/login-comp.jpeg';

import firebase from 'firebase';

export class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            confirmPassword: ''
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
        // // eslint-disable-next-line
        // const email = target.email;
        // // eslint-disable-next-line
        // const password = target.password;
        // // eslint-disable-next-line
        // const confirmPassword = target.confirmPassword;

        this.setState({
            [name]: value
        });
    }
    handleSubmit(event) {
        event.preventDefault();
        event.stopPropagation();
        if(this.state.password !== this.state.confirmPassword){
            console.log("Passwords dont match, exiting");
            return false;
        }
        console.log("Creating user");
        this.createUser();
        this.resetForm();
    }
    createUser = () => (
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).catch(function (error) {
            var errorMessage = error.message;
            throw errorMessage;
        })
    );
    render() {
        return (
            <div className="Just-Flex Darkgray-bg Fill-Height">
                <div className="Half-Width-Full-Height">
                    <img src={LoginImg} alt="Login Control" className="Cover" />
                </div>
                <div className="Half-Width-Full-Height ">
                    <FeatureHeader className="Darkgray-bg White-children Thicc White">
                        <BigHeader className="Very-Large">SIGN UP</BigHeader>
                        <br />
                        <BigHeader className="White PLR">MEET BANDS, MEET FANS, GET GIGS<br/>JOIN TODAY FOR FREE.</BigHeader>
                        <br/>
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
                                <label className="Label-Controller">CONFIRM PASSWORD</label>
                                <br />
                                <input
                                    name="confirmPassword"
                                    type="password"
                                    value={this.state.confirmPassword}
                                    onChange={this.handleInputChange}
                                    required
                                />
                            </TextInput>
                            <StandardButton className="Red Bold White-bg" type="submit">SIGN UP</StandardButton>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}