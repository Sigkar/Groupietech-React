import React, { Component } from 'react';
import { PageContainer, ContentFeatureComponent, FlexContainer, FeatureContent, HalfFeature } from '../../Components/cards.js';
import {StaggerChildren, LoadFade, Fade} from '../../Components/staticposes.js';

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