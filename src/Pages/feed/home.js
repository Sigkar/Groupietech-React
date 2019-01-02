import React, { Component } from 'react';
import posed  from 'react-pose';
import { PageContainer, FlexContainer, FeatureContent } from '../../Components/cards.js';
import {ShortCard} from '../../Components/content.js';

export class Home extends Component{
    componentWillMount(){

    }
    componentDidMount(){

    }
    render(){
        return(
            <PageContainer>
                <FlexContainer>
                    <hr/>
                    <FeatureContent className="White-bg">

                    </FeatureContent>
                </FlexContainer>
            </PageContainer>
        )
    }
}