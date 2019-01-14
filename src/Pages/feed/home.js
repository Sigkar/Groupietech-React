//React
import React, { Component } from 'react';

// Redux
//import { createStore } from 'redux';


//Firebase
import firebase from 'firebase/app';
import 'firebase/auth';
import "firebase/firestore";

import {_getCollection} from '../../async/getCollection.js';

// Design
import { PageContainer, ContentFeatureComponent } from '../../Components/cards.js';
import { StaggerChildrenContent, LoadFade } from '../../Components/staticposes.js';
import LoginImage from '../../Images/login-comp.jpeg';

//const store = createStore;
//     0:
// content:
// created_at: 1547427404.072
// hearts: 0
// posted_by: "Randombot"
// text: "8y1tyr8y1tyr8y1tyr8y1tyr8y1tyr8y1tyr8y1tyr8y1tyr"
// title: "8y1tyr"
// updated_at: 1547427404.072
// __proto__: Object
// id: "35BDQ4oprEQsU4t0OL1a"
const GenerateHomeContent = ({ current, items, total, rand }) => (
    <div>
        {items.slice(current, total).map(item => (
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
            offset: new Date().getTimezoneOffset(),
        };
    }
    componentDidMount() {

        let db = firebase.firestore();
        db.settings({
            timestampsInSnapshots: true
        });
        
        _getCollection("posts").then(
            (res) => {
                this.setState({
                    isLoaded: true,
                    items: res
                });
                setTimeout(this.toggleLoadAnimations, 500);
            },
            (error)=>{
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        );

        window.scrollTo(0, 0);
        // fetch("https://jsonplaceholder.typicode.com/posts")
        //     .then(res => res.json())
        //     .then(
        //         (result) => {
        //             this.setState({
        //                 isLoaded: true,
        //                 items: result
        //             });
        //             setTimeout(this.toggleLoadAnimations, 500);
        //         },
        //         (error) => {
        //             this.setState({
        //                 isLoaded: true,
        //                 error
        //             });
        //         }
        //     )
    }
    // makeRandomData(){
    //     let _seconds = new Date() / 1000;
    //     let db = firebase.firestore();
    //     let r = Math.random().toString(36).substring(7);
    //     let _hearts = 0;
    //     let _posted_by = "Randombot";
    //     let _text = r+r+r+r+r+r+r+r;
    //     let _title = r;
    //     let _created_at = _seconds;
    //     let _updated_at = _seconds;
    //     db.collection("posts").add({
    //         text: _text,
    //         title: _title,
    //         created_at: _created_at,
    //         updated_at: _updated_at,
    //         posted_by: _posted_by,
    //         hearts: _hearts
    //     });
    //     console.log("Created data.");

    // }
    toggleLoadAnimations = () => (this.setState({ loadAnimations: true }));
    getRandomArbitrary = (min, max) => { return Math.round(Math.random() * (max - min) + min) }
    render() {
        const { loadAnimations, error, isLoaded, items, current, total, offset } = this.state;
        console.log(offset);
        if (error) {
            return <div>Sorry, Headlinerr has a bad sound guy!<br />Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div className="Loading">Loading</div>
        } else {
            return (
                <PageContainer>
                    <StaggerChildrenContent pose={loadAnimations ? 'open' : 'closed'}>
                        <GenerateHomeContent items={items} current={current} total={total} rand={this.getRandomArbitrary} />
                        <p>Scroll support coming soon I guess.</p>
                    </StaggerChildrenContent>
                </PageContainer>
            )
        }
    }
}