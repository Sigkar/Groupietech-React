//React
import React, { Component } from 'react';

// Redux
//import { createStore } from 'redux';


//Firebase
import firebase from 'firebase/app';
import 'firebase/auth';
import "firebase/firestore";

import { getUserStatus } from '../../async/getAuthStatus.js';
import { _getCollection } from '../../async/getCollection.js';

// Design
import { PageContainer, ContentFeatureComponent } from '../../Components/cards.js';
import { StaggerChildrenContent, LoadFade } from '../../Components/staticposes.js';
import LoginImage from '../../Images/login-comp.jpeg';

const GenerateHomeContent = ({ current, items, total, rand, offset }) => (
    <div>
        {items.slice(current, total).map(item => (
            console.log("Date: " + new Date(Math.ceil(item.content.created_at) * 1000)),

            <LoadFade key={item.id}>
                <ContentFeatureComponent
                    imageLink={LoginImage}
                    key={item.content.id}
                    title={item.content.title}
                    description={item.content.text}
                    day="14"
                    month="04"
                    year="2019"
                    hour="2"
                    min="40"
                    ampm="PM" />
            </LoadFade>
        ))}
    </div>
);

export class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            current: 0,
            total: 5,
            loadAnimations: false,
            loadComplete: false,
            offset: new Date().getTimezoneOffset(),
            userState: '',
            checkingAuth: false,
        };
    }
    componentWillMount(){
        getUserStatus().then((Response) => {
            this.setState({ checkingAuth: false, userState: Response });
        }).catch(function (error) {
            console.log(error);
        });
    }
    componentDidMount() {

        let db = firebase.firestore();
        db.settings({
            timestampsInSnapshots: true
        });

        this.res();
        window.scrollTo(0, 0);

    }
    res = () => _getCollection("posts").then((res) => {
        this.setState({
            isLoaded: true,
            items: res
        });
        setTimeout(this.toggleLoadAnimations, 500);
    },(error) => {
            this.setState({
                isLoaded: true,
                error
            });
        }
    );
    toggleLoadAnimations = () => (this.setState({ loadAnimations: true }));
    getRandomArbitrary = (min, max) => { return Math.round(Math.random() * (max - min) + min) }
    render() {
        const { loadAnimations, error, isLoaded, items, current, total, offset, userState, checkingAuth } = this.state;
        if (error) {
            return <div>Sorry, Headlinerr has a bad sound guy!<br />Error: {error.message}</div>;
        } else if (!isLoaded || checkingAuth) {
            return <div className="Loading">Loading</div>
        } else if (isLoaded && !checkingAuth && userState){
            return (
                <PageContainer>
                    <StaggerChildrenContent pose={loadAnimations ? 'open' : 'closed'}>
                        <GenerateHomeContent items={items} current={current} total={total} rand={this.getRandomArbitrary} offset={offset}/>
                        <p>Scroll support coming soon I guess.</p>
                    </StaggerChildrenContent>
                </PageContainer>
            )
        }else{
            return <div className="Loading">Sign up, or sign in, to see great stuff!</div>
        }
    }
}