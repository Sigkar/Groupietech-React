import React, { Component } from 'react';
import { PageContainer, FlexContainer, FeatureContent, HalfBlock, FullBlock } from '../../Components/cards.js';
import { LoadFade } from '../../Components/staticposes.js';

export class Discover extends Component {
    componentDidMount(){
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <PageContainer>
                <LoadFade>
                    <FeatureContent>
                        <FlexContainer>
                            <FullBlock>
                                Hey mr. postman
                            </FullBlock>
                            <HalfBlock>Hello World</HalfBlock>
                            <HalfBlock>Hello World</HalfBlock>
                            <HalfBlock>Hello World</HalfBlock>
                            <HalfBlock>Hello World</HalfBlock>
                            <HalfBlock>Hello World</HalfBlock>
                            <HalfBlock>Hello World</HalfBlock>
                        </FlexContainer>
                    </FeatureContent>
                </LoadFade>
            </PageContainer>
        )
    }

}