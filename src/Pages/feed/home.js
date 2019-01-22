//React
import React, { Component } from 'react';

// Redux
//import { createStore } from 'redux';


//Firebase
import firebase from 'firebase/app';
import 'firebase/auth';
import "firebase/firestore";
import {distanceInWordsToNow, format} from 'date-fns';
import { getUserStatus } from '../../async/getAuthStatus.js';
import { _getCollection } from '../../async/getCollection.js';
import { createDoc } from '../../async/createNewPost.js';
import { TextInput, StandardButton, ReturnMessage } from '../../Components/global.js';

// Design
import { PageContainer, ContentFeatureComponent } from '../../Components/cards.js';
import { StaggerChildrenContent, LoadFade } from '../../Components/staticposes.js';
import LoginImage from '../../Images/login-comp.jpeg';
import { FunctionIcon } from '../../Components/navigation.js';

class HomeContent extends Component {

    getDateWords = ( dateValue ) => {
        let post = Math.round(new Date(dateValue).getTime() * 1000);
        let result = distanceInWordsToNow(
            post,
            {addSuffix: true}
        )
        return result;
    }

    getDateFormat = ( dateValue ) => {
        let post = Math.round(new Date(dateValue).getTime() * 1000);
        let result = format(
            post,
            'MMM DD YYYY h:mm a'
        );
        return result;
    }

    render() {
        return (
            this.props.items.map((item) => (
                console.log(item),
                item['content']['postdata'].map((doc, key) => (
                    <LoadFade key={key}>
                        <ContentFeatureComponent
                            key={key+1}
                            imageLink={LoginImage}
                            title={doc.title}
                            description={doc.desc}
                            date={this.getDateFormat(doc.tup.seconds)}
                            offset={this.getDateWords(doc.tup.seconds)}
                            user={doc.posted_by}
                        />
                    </LoadFade>
                ))
            ))
        )
    }
}

class CreatePost extends Component {
    constructor(props){
        super(props);
        this.state = {
            authState: this.props.authState,
            title: '',
            desc: ''
        }
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
        let postData = {
            title: this.state.title,
            desc: this.state.desc,
        }
        createDoc(postData);
    }
    render(){
        return(
            <form
                onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); } }}
                onSubmit={this.handleSubmit.bind(this)}
            >
                    <label className="Label-Controller">TITLE</label>
                    <br />
                    <input
                        name="title"
                        type="text"
                        value={this.state.title}
                        onChange={this.handleInputChange}
                    />
                    <br />
                    <label className="Label-Controller">TEXT</label>
                    <br />
                    <input
                        name="desc"
                        type="text"
                        value={this.state.desc}
                        onChange={this.handleInputChange}
                    />
                    <br />
                <button className="White Bold" type="submit">SIGN IN</button>
            </form>
        )
    }
}
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
            contentLoaded: false
        };
    }
    componentWillMount() {
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
    }, (error) => {
        this.setState({
            isLoaded: true,
            error
        });
    }
    );
    toggleLoadAnimations = () => (this.setState({ loadAnimations: true }));
    getRandomArbitrary = (min, max) => { return Math.round(Math.random() * (max - min) + min) }
    render() {
        const { loadAnimations, error, isLoaded, items, userState, checkingAuth } = this.state;
        if (error) {
            return <div>Sorry, Headlinerr has a bad sound guy!<br />Error: {error.message}</div>;
        } else if (!isLoaded || checkingAuth) {
            return <div className="Loading">Loading</div>
        } else if (isLoaded && !checkingAuth && userState) {
            return (
                <PageContainer>
                    <StaggerChildrenContent pose={loadAnimations ? 'open' : 'closed'}>
                        <CreatePost authState={userState}></CreatePost>
                        <HomeContent items={items} />
                    </StaggerChildrenContent>
                    <div className="Create-Post White-bg Light-Box-Shadow White-hover-bg">
                        <FunctionIcon navIcon="create" classOption="Pink-children"/>
                    </div>
                </PageContainer>
            )

        } else {
            return <div className="Loading">Sign up, or sign in, to see great stuff!</div>
        }
    }
}