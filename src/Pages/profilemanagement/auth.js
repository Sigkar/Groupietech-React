import React, {Component} from 'react';

import { PageContainer, FlexContainer, FeatureContent } from '../../Components/cards.js';

export class Auth extends Component{
    render(){
        return(
            <PageContainer>
                <FlexContainer>
                    <FeatureContent className="White-bg">
                        <h2>Authorize Yoself</h2>
                    </FeatureContent>
                </FlexContainer>
            </PageContainer>
        )
    }
}