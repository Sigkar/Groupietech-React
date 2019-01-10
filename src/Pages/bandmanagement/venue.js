import React, { Component } from 'react';
import { PageContainer } from '../../Components/cards.js';

export class Venue extends Component{
    componentDidMount(){
        window.scrollTo(0, 0);
    }
    render(){
        return(
            <PageContainer>
                <h1>Find Bands</h1>
            </PageContainer>
        )
    }

}