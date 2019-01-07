import React, { Component } from 'react';
import styled from 'styled-components';

import { ProfilePictureContainer, ProfilePic } from '../../Components/global.js';
import {
    PageContainer,
    FlexContainer,
    ContentTitleForSectionCards,
    ContentFeatureComponent,
    ProfileBlock,
    LeftContentContainer,
    ThirdTile
} from '../../Components/cards.js';
import { StaggerRemaining, LoadFade } from '../../Components/staticposes.js';
import { HeaderLeftPad, BigHeader, PC, InnerPC, ProfileList } from '../../Components/content.js';
import { CoverThis } from '../../Components/global.js';

const OptionTiles = () => (
    <FlexContainer>
        <ThirdTile className="White-bg Light-Box-Shadow">
            <img src="https://picsum.photos/620/595/?random" className="Cover Pad-Top-AR PushUpOneHundredY" alt="Random" />
            <CoverThis className="Pad-Top-AR PushUpOneHundredY">
                <h2 className="InnerAspectRatio NoPadNoMargin White">SONGS</h2>
            </CoverThis>
        </ThirdTile>
        <ThirdTile className="White-bg Light-Box-Shadow">
            <img src="https://picsum.photos/622/599/?random" className="Cover Pad-Top-AR PushUpOneHundredY" alt="Random" />
            <CoverThis className="Pad-Top-AR PushUpOneHundredY">
                <h2 className="InnerAspectRatio NoPadNoMargin White">SHOWS</h2>
            </CoverThis>
        </ThirdTile>
        <ThirdTile className="White-bg Light-Box-Shadow">
            <img src="https://picsum.photos/600/569/?random" className="Cover Pad-Top-AR PushUpOneHundredY" alt="Random" />
            <CoverThis className="Pad-Top-AR PushUpOneHundredY">
                <h2 className="InnerAspectRatio NoPadNoMargin White">POSTS</h2>
            </CoverThis>
        </ThirdTile>
    </FlexContainer>
)



export class Profile extends Component {
    state = { loadAnimations: false }
    componentDidMount() {
        setTimeout(this.toggleLoadAnimations, 500);
    }
    toggleLoadAnimations = () => (this.setState({ loadAnimations: true }));
    render() {
        const { loadAnimations } = this.state;
        return (
            <PageContainer>
                <StaggerRemaining pose={loadAnimations ? 'open' : 'closed'}>
                    <FlexContainer>

                        <LeftContentContainer>
                            <ProfileBlock className="Darkgray-bg Darkgray-children">
                                <ProfilePictureContainer>
                                    <ProfilePic src="https://picsum.photos/300/?random" alt="Random Picsum" />
                                </ProfilePictureContainer>
                                <BigHeader className="White">MILL BURRAY</BigHeader>
                            </ProfileBlock>
                            <OptionTiles/>
                            <div className="Media-Spacer"></div>
                            <LoadFade>
                                <ContentFeatureComponent imageLink="https://picsum.photos/620/599/?random"
                                    title="MILL BURRAY ATTACKS"
                                    description="Tilde quinoa vexillologist shoreditch. Single-origin coffee keffiyeh cornhole hot chicken. Tbh pug chia asymmetrical gluten-free sustainable tumblr squid deep"
                                    day="14"
                                    month="04"
                                    year="2019"
                                    hour="2"
                                    min="40"
                                    ampm="PM" />
                            </LoadFade>
                            <LoadFade>
                                <ContentFeatureComponent imageLink="https://picsum.photos/600/604/?random"
                                    title="SOME POST HE MADE"
                                    description="This can just be whatever people want to say"
                                    day="04"
                                    month="01"
                                    year="2019"
                                    hour="7"
                                    min="30"
                                    ampm="PM" />
                            </LoadFade>
                            <LoadFade>
                                <ContentFeatureComponent imageLink="https://picsum.photos/601/601/?random"
                                    title="THE BEAR JEW"
                                    description="Hugo Stiglitz has a really good plot in Inglorious Basterds prove me wrong"
                                    day="05"
                                    month="02"
                                    year="2019"
                                    hour="5"
                                    min="15"
                                    ampm="PM" />
                            </LoadFade>
                        </LeftContentContainer>

                    </FlexContainer>
                </StaggerRemaining>
            </PageContainer>
        )
    }
}