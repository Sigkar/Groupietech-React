import React, { Component } from 'react';
import posed  from 'react-pose';
import {FullCard} from '../Components/cards.js';
import {FullCardTitle} from '../Components/content.js';

export class Home extends Component{
    componentWillMount(){

    }
    componentDidMount(){

    }
    render(){
        return(
            <section id="homepage">
                <FullCard className="White-bg">
                </FullCard>
            </section>
        )
    }
}