//React
import React, { Component } from 'react';

// Redux
//import { createStore } from 'redux';


//Firebase Authentication
import firebase from 'firebase/app';
import 'firebase/auth';
import "firebase/firestore";
// Design
import { PageContainer, ContentFeatureComponent } from '../../Components/cards.js';
import { StaggerChildrenContent, LoadFade } from '../../Components/staticposes.js';

//const store = createStore;

const GenerateHomeContent = ({ current, items, total, rand }) => (
    <div>
        {items.slice(current, total).map(item => (
            <LoadFade key={item.id}>
                <ContentFeatureComponent
                    imageLink={"https://picsum.photos/" + rand(550, 650) + "/" + rand(550, 650) + "/?random"}
                    key={item.id}
                    title={item.title}
                    description={item.body}
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
    state = { loadAnimations: false }
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            current: 0,
            total: 15,
        };
    }

    componentDidMount() {

        let db = firebase.firestore();
        db.settings({
            timestampsInSnapshots: true
        });
        db.collection("posts").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log(`${doc.id} => ${doc.data()}`);
                const data = doc.data();
                console.log(data);
            });
        });
        window.scrollTo(0, 0);
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                    setTimeout(this.toggleLoadAnimations, 500);
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
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
        const { loadAnimations, error, isLoaded, items, current, total } = this.state;
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