import React, { Component } from 'react';
import posed  from 'react-pose';
import { PageContainer, FlexContainer } from '../Components/cards.js';

export class Home extends Component{
    componentWillMount(){

    }
    componentDidMount(){

    }
    render(){
        return(
            <PageContainer>
                <FlexContainer>
                    <div className="Full-Short-Card Card-Blue-To-White-Border">
                        
                    </div>
                    <div className="Full-Short-Card Card-Red-Blue-Pink-Border">
                        
                    </div>
                    <div className="Half-Card Card-Blue-To-White-Border">
                        
                    </div>
                    <div className="Half-Card Card-Blue-To-White-Border">
                        
                    </div>
                </FlexContainer>
            </PageContainer>
        )
    }
}