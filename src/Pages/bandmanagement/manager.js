import React, { Component } from 'react';
import { PageContainer } from '../../Components/cards.js';
import { LoadFade } from '../../Components/staticposes.js';

import {SectionTitle} from '../../Components/content.js'

export class Manager extends Component{
    componentDidMount(){
        window.scrollTo(0, 0);
    }
    render(){
        return(
            <PageContainer>
                <LoadFade>
                    <SectionTitle className="Solid-Vertical-Border Darkgray-bg">
                        <h1 className="CAPS White">FIND TALENT</h1>
                    </SectionTitle>
                </LoadFade>
            </PageContainer>
        )
    }

}