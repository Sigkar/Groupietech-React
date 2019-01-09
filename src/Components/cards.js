import React, { Component } from 'react';

import styled from 'styled-components';

import MaterialIcon, { colorPalette } from 'material-icons-react';

import { isNullOrUndefined } from 'util';


/* Full width and height card */
export const FullCard = styled.div`
    height:95vh;
    width:95%;
    margin:2.5vh auto;
    border-radius:5px;
`;
export const BoxContainer = styled.section`
    display:flex;
    justify-content:space-around;
    width:80vw;
    margin:0 auto;
    
`;
/* Features */
export const FeatureContent = styled.section`
    position:relative;
    margin:20px auto;
    width:100%;
    height:auto;
    min-height:400px;
    max-width:1200px;
    @media screen and (max-width:800px){
        margin-top:0px !important;
    }
`;
export const ContentWidth = styled.section`
    position:relative;
    margin:20px auto;
    width:100%;
    height:auto;
    max-width:1200px;
    @media screen and (max-width:800px){
        margin-top:0px !important;
    }
`;
export const TextContent = styled.section`
    position:reative;
    margin:20px auto;
    width:100%;
    height:auto;
    max-width:1200px;
    padding:30px 0px 50px 0px;
    @media screen and (max-width:800px){
        margin-top:0px !important;
    }
`


export const FeatureHeader = styled.div`
    height:auto;
    min-height:24px;
    padding-top:10px;
    padding-bottom:10px;
    width:100%;
    margin:20px auto;
    line-height:24px;
    border-color:rgba(191, 63, 63, 1);
    border-bottom:3px solid;
    h2{
        text-align:center;
        margin:0;
        padding:0;
    }
`;

export const HalfBlock = styled.div`
    width:calc(50% - 26px);
    margin:10px;
    height:auto;
    padding:3px;
`
export const FullBlock = styled.div`
    width:calc(100% - 26px);
    margin:10px;
    height:auto;
    padding:3px;
`

export const HalfFeature = styled.div`
    width:50%;
    min-height:400px;
`;
export const FeatureTitle = styled.h2`
    font-size:24px;
    padding-left:20px;
    letter-spacing:3px;
    text-transform: uppercase;
`
export const FeatureDesc = styled.p`
    font-size:18px;
    padding-left:22px;
`;
export const BreakTitle = styled.div`
    width:90%;
    border:2px solid;
    height:0px;
    margin:0 auto;
    border-image: linear-gradient(to top left, rgba(191, 63, 63, 1) 33.33%, rgba(10, 193, 255, 1) 66.66%, rgba(175, 0, 103, 1) 100%) 5;
`;

export const FlexContainer = styled.section`
    display:flex;
    justify-content:space-around;
    align-items:center;
    flex-wrap: wrap;
    flex-direction: row;
`;

export const FlexRight = styled.section`
    display:flex;
    flex-wrap:wrap;
    flex-decoration: row;
    float:right;
`;

export const ProfileTile = styled.section`
    width:calc((100% / 4) - 20px);
    margin-top:20px;
    :before{
        display:block;
        padding-top:100%;
        content:"";
    }

    border-top:0px;
    border-left:0px;
    border-right:0px;
    border-bottom:3px solid;
    border-color: rgba(191, 63, 63, 1);
    position:relative;
    @media screen and (max-width:450px){
        width:calc((100% / 2) - 10px);
    }
`;

export const SmallTile = styled.div`
    width:9vw;
    height:9vw;
    margin:.5vw;
    border-radius:4px;
`;
export const PageContainer = styled.div`
    width:calc(100% - 60px);
    height:auto;
    min-height:100vh;
    position:relative;
    left:30px;
    top:60px;
`
export const HalfContain = styled.div`
    position:absolute;
    top:0px;
    left:0px;
    width:Auto;
    min-width:25%;
    height:18px;
    border-bottom:4px solid;
    padding-top:5px;
    padding-bottom:5px;
    text-align:center
`;

export const ProfileBlock = styled.div`
    width:28.5%;
    height:calc(100vh - 60px);
    position:fixed;
    top:60px;
    right:0px;
    overflow-y:scroll;
    @media screen and (max-width:800px){
        margin:20px 0px 0px 0px;
        position:relative !important;
        width:100%;
        height:auto;
        top:0px;
        padding:20px 0;
        -webkit-box-shadow: 10px 10px 20px -10px rgba(0,0,0,0.5);
        -moz-box-shadow: 10px 10px 20px -10px rgba(0,0,0,0.5);
        box-shadow: 10px 10px 20px -10px rgba(0,0,0,0.5);
    }

    *{
        margin:0;
    }
`;
export const LeftContentContainer = styled.section`
    width:70%;
    min-height:400px;
    position:relative;
    right:15%
    @media screen and (max-width:800px){
        width:100%;
        right:0px !important;
    }
`;

const PostOptions = ({ iconOption }) => (
    <div className="Red-hover Social-Icon White-children">
        <MaterialIcon icon={iconOption} />
    </div>
)

export class TextPostComponent extends Component {
    render() {
        return (
            <ContentWidth>
                <TextContent className="Darkgray-bg Heavy-Box-Shadow Feed-Content-Box">
                    <HalfContain className="HalfContain Darkgray-bg White Solid-Bottom-Border Light-Box-Shadow">
                        {this.props.month}/{this.props.day}/{this.props.year} - {this.props.hour}:{this.props.min} {this.props.ampm}
                    </HalfContain>
                    <FeatureTitle className="White Capitalize">{this.props.title}</FeatureTitle>
                    <BreakTitle />
                    <FeatureDesc className="White">{this.props.post}</FeatureDesc>

                    <div className="Lightgray-bg Scroll-Y Text-Social-Actions">
                        <FlexRight>
                            <PostOptions iconOption="chat_bubble_outline" />
                            <PostOptions iconOption="share" />
                            <PostOptions iconOption="report" />
                        </FlexRight>
                    </div>
                </TextContent>
            </ContentWidth>
        )
    }
}

export class ContentFeatureComponent extends Component {

    render() {
        return (

            <FeatureContent className="White-bg Heavy-Box-Shadow Feed-Content-Box">
                <FlexContainer>
                    <div className="White-bg Half-Feature Prevent-Overflow">
                        <HalfContain className="HalfContain Darkgray-bg White Solid-Bottom-Border Light-Box-Shadow">
                            {this.props.month}/{this.props.day}/{this.props.year} - {this.props.hour}:{this.props.min} {this.props.ampm}
                        </HalfContain>
                        <img src={this.props.imageLink} alt="Something something required" className="Cover" />
                    </div>
                    <div className="Darkgray-bg Half-Feature Content-Half Auto-Height">
                        <FeatureTitle className="White Capitalize">{this.props.title}</FeatureTitle>
                        <BreakTitle />
                        <FeatureDesc className="White">{this.props.description}</FeatureDesc>

                        <div className="Feature-Image-Options Lightgray-bg Scroll-Y">
                            <FlexRight>
                                <PostOptions iconOption="chat_bubble_outline" />
                                <PostOptions iconOption="share" />
                                <PostOptions iconOption="report" />
                            </FlexRight>
                        </div>
                    </div>
                </FlexContainer>
            </FeatureContent>
        )
    }
}

export class ContentTitleForSectionCards extends Component {
    render() {
        return (
            <FeatureHeader className="Heavy-Box-Shadow Darkgray-bg White-children Solid-Bottom-Border">
                <h2>
                    {this.props.title !== isNullOrUndefined ? this.props.title.toUpperCase() : "AN EVENT IS HAPPENING!"}
                </h2>
            </FeatureHeader>
        )
    }
}