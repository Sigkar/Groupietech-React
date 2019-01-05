import React, { Component } from 'react';
import { PageContainer, FlexContainer, ContentTitleForSectionCards, ContentFeatureComponent, ProfileBlock, LeftContentContainer } from '../../Components/cards.js';

export class Profile extends Component {
    render() {
        return (
            <PageContainer>
                <FlexContainer>
                    <ProfileBlock>
                        <h1>Uh suh dude</h1>
                    </ProfileBlock>
                    <LeftContentContainer>
                        <ContentTitleForSectionCards title="recent posts"/>
                        <ContentFeatureComponent imageLink="https://picsum.photos/620/599/?random"
                            title="BILL MURRAY ATTACKS"
                            description="Tilde quinoa vexillologist shoreditch. Single-origin coffee keffiyeh cornhole hot chicken. Tbh pug chia asymmetrical gluten-free sustainable tumblr squid deep"
                            day="14"
                            month="04"
                            year="2019"
                            hour="2"
                            min="40"
                            ampm="PM" />

                        <ContentFeatureComponent imageLink="https://picsum.photos/600/604/?random"
                            title="SOME POST HE MADE"
                            description="This can just be whatever people want to say"
                            day="04"
                            month="01"
                            year="2019"
                            hour="7"
                            min="30"
                            ampm="PM" />
                        <ContentFeatureComponent imageLink="https://picsum.photos/601/601/?random"
                            title="THE BEAR JEW"
                            description="Hugo Stiglitz has a really good plot in Inglorious Basterds prove me wrong"
                            day="05"
                            month="02"
                            year="2019"
                            hour="5"
                            min="15"
                            ampm="PM" />
                    </LeftContentContainer>
                </FlexContainer>
            </PageContainer>
        )
    }
}