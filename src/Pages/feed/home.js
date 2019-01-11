//React
import React, { Component } from 'react';

// Redux
//import { createStore } from 'redux';


//Firebase Authentication
import * as firebase from 'firebase/app';
import 'firebase/auth';
// Design
import MaterialIcon from 'material-icons-react';
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