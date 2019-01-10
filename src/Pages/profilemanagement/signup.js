import React, { Component } from 'react';

import { PageContainer, FlexContainer, FeatureContent, ProfileBlock } from '../../Components/cards.js';

import { TextInput } from '../../Components/global.js';

import firebase from 'firebase';

export class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
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
        // eslint-disable-next-line
        const email = target.email;
        const password = target.password;

        this.setState({
            [name]: value
        });
    }
    handleSubmit(event) {
        event.preventDefault();
        event.stopPropagation();
        console.log("Creating user");
        this.createUser();
        this.resetForm();
    }
    createUser = () => (firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
    })
    );
    render() {
        return (
            <PageContainer>
                <FeatureContent>
                    <div id="SignUpModal">
                        <form
                            onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); } }}
                            onSubmit={this.handleSubmit.bind(this)}
                        >
                            <TextInput>
                                <input
                                    name="email"
                                    type="email"
                                    value={this.state.email}
                                    onChange={this.handleInputChange}
                                    required
                                />
                                <input
                                    name="password"
                                    type="password"
                                    value={this.state.password}
                                    onChange={this.handleInputChange}
                                    required
                                />
                            </TextInput>
                            <input type="submit" value="SUBMIT" />
                        </form>
                    </div>
                </FeatureContent>
            </PageContainer>
        )
    }
}