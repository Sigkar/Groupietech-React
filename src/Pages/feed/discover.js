import React, { Component } from 'react';
import { PageContainer, ContentFeatureComponent, FlexContainer, FeatureContent, HalfFeature } from '../../Components/cards.js';
import { StaggerChildren, LoadFade, Fade } from '../../Components/staticposes.js';
import {SectionTitle} from '../../Components/content.js'

export class Discover extends Component {

    render() {
        return (
            <PageContainer>
                <LoadFade>
                    <SectionTitle className="Solid-Vertical-Border Darkgray-bg">
                        <h1 className="CAPS White">DISCOVER BANDS</h1>
                    </SectionTitle>
                </LoadFade>
            </PageContainer>
        )
    }

}