import React, {Component} from 'react';

import { PageContainer, FlexContainer, FeatureContent, ProfileBlock } from '../../Components/cards.js';

export class Auth extends Component{
    render(){
        return(
            <PageContainer>
                <FlexContainer>
                    <FeatureContent>
                        <ProfileBlock className="White-bg">

                        </ProfileBlock>
                    </FeatureContent>
                </FlexContainer>
            </PageContainer>
        )
    }
}