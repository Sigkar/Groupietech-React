import React, { Component } from 'react';
import posed  from 'react-pose';
import { PageContainer, FlexContainer, FeatureContent, HalfFeature } from '../../Components/cards.js';
import {Half} from '../../Components/content.js';



class ContentFeatureComponent extends Component{
    render(){
        return(
            <FeatureContent className="White-bg Heavy-Box-Shadow">
                <FlexContainer>
                    <div className="White-bg Half-Feature">
                    </div>
                    <div className="Darkgray-bg Half-Feature">
                    </div>
                </FlexContainer>
            </FeatureContent>
        )
    }
}


export class Home extends Component{
    componentWillMount(){

    }
    componentDidMount(){

    }
    render(){
        return(
            <PageContainer>
                <ContentFeatureComponent/>
                <ContentFeatureComponent/>
                <ContentFeatureComponent/>
            </PageContainer>
        )
    }
}