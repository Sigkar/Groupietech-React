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
    handleSubmit(event) {
        event.preventDefault();
        event.stopPropagation();
        console.log(this.state.email);
        console.log(this.state.password);
        
        let user = this.signInUser();
        console.log(user);
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
        var errorMessage;
        var email = this.state.email;
        var password = this.state.password;
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
            .then(function () {
                return firebase.auth().signInWithEmailAndPassword(email, password);
            })
            .catch(function (error) {
                console.log(error);
                return false;
            })
    };

    friendlyMessageToggle = () => (this.state.messageOpen ? this.setState({ messageOpen: false }) : this.setState({ messageOpen: true }), setTimeout(function(){this.setState({openMessage: false})},3000));
    render() {
        const { messageOpen, message } = this.state;
        return (
            <div className="Just-Flex Darkgray-bg Fill-Height">
                <ReturnMessage message={message} functionOption={messageOpen ? "open" : "closed"}/>
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