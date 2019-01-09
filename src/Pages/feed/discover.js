import React, { Component } from 'react';
import { PageContainer, ContentFeatureComponent, FlexContainer, FeatureContent, HalfBlock, FullBlock } from '../../Components/cards.js';
import { StaggerChildren, LoadFade, Fade } from '../../Components/staticposes.js';
import {SectionTitle} from '../../Components/content.js'

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