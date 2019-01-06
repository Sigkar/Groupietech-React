import React, { Component } from 'react';
import styled from 'styled-components';

import {ProfilePictureContainer, ProfilePic} from '../../Components/global.js';
import { PageContainer, FlexContainer, ContentTitleForSectionCards, ContentFeatureComponent, ProfileBlock, LeftContentContainer } from '../../Components/cards.js';
import { StaggerChildren, LoadFade } from '../../Components/staticposes.js';
import { HeaderLeftPad, BigHeader, PC, InnerPC, ProfileList } from '../../Components/content.js'




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
                <StaggerChildren pose={loadAnimations ? 'open' : 'closed'}>
                    <FlexContainer>

                        <LeftContentContainer>
                            <ProfileBlock className="Darkgray-bg Darkgray-children">
                                <ProfilePictureContainer>
                                    <ProfilePic src="https://picsum.photos/300/?random" alt="Random Picsum"/>
                                </ProfilePictureContainer>
                                <BigHeader className="White">MILL BURRAY</BigHeader>
                                <ProfileList className="White-children">
                                    <PC>Age: 51</PC>
                                    <PC>Style: Indie</PC>
                                    <PC>
                                        Instruments:
                                        <br/>
                                        <InnerPC>Vocals</InnerPC>
                                        <InnerPC>Guitar</InnerPC>
                                        <InnerPC>Drums</InnerPC>
                                        <InnerPC>Keyboard</InnerPC>
                                    </PC>
                                </ProfileList>
                            </ProfileBlock>
                            <ContentTitleForSectionCards title="recent posts" />
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
                </StaggerChildren>
            </PageContainer>
        )
    }
}