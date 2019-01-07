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
    ProfileTile
} from '../../Components/cards.js';
import { StaggerRemaining, LoadFade } from '../../Components/staticposes.js';
import { HeaderLeftPad, BigHeader, SectionTitle } from '../../Components/content.js';
import { CoverThis } from '../../Components/global.js';

const OptionTiles = ({pictureOption, stateTitle, stateOption}) => (
    <ProfileTile className="White-bg Light-Box-Shadow Solid-Bottom-Border">
        <img src={pictureOption} className="Cover Pad-Top-AR PushUpOneHundredY" alt="Random" />
        <CoverThis className="Pad-Top-AR PushUpOneHundredY">
            <h2 className="InnerAspectRatio NoPadNoMargin White">{stateTitle}</h2>
        </CoverThis>
    </ProfileTile>
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
                            <LoadFade>
                                <FlexContainer>
                                    <OptionTiles pictureOption="https://picsum.photos/501/?random" stateTitle="POSTS"/>
                                    <OptionTiles pictureOption="https://picsum.photos/502/?random" stateTitle="SHOWS"/>
                                    <OptionTiles pictureOption="https://picsum.photos/503/?random" stateTitle="SONGS"/>
                                    <OptionTiles pictureOption="https://picsum.photos/504/?random" stateTitle="SPONSOR"/>
                                    <OptionTiles pictureOption="https://picsum.photos/505/?random" stateTitle="CONTACT"/>
                                    <OptionTiles pictureOption="https://picsum.photos/506/?random" stateTitle="ABOUT"/>
                                    <OptionTiles pictureOption="https://picsum.photos/507/?random" stateTitle="HISTORY"/>
                                    <OptionTiles pictureOption="https://picsum.photos/509/?random" stateTitle="HIRE"/>
                                </FlexContainer>
                            </LoadFade>
                            <div className="Media-Spacer"></div>
                            <LoadFade>
                                <SectionTitle className="Solid-Vertical-Border Darkgray-bg">
                                    <h1 className="CAPS White">Pinned Posts</h1>
                                </SectionTitle>
                            </LoadFade>
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