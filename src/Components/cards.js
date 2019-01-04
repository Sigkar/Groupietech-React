import React, { Component } from 'react';

import styled from 'styled-components';

import MaterialIcon, {colorPalette} from 'material-icons-react';


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
    margin:20px 0;
    width:100%;
    height:auto;
    min-height:400px;
`;
export const HalfFeature = styled.div`
    width:50%;
    min-height:400px;
`;
export const FeatureTitle = styled.h2`
    font-size:24px;
    padding-left:20px;
    letter-spacing:3px;
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
    height:20px;
    padding-top:5px;
    padding-bottom:5px;
    text-align:center

`;

const PostOptions = ({iconOption}) => (
    <div className="Red-hover Social-Icon White-children">
        <MaterialIcon icon={iconOption}/>
    </div>
)

export class ContentFeatureComponent extends Component{
    render(){
        return(
            
            <FeatureContent className="White-bg Heavy-Box-Shadow Feed-Content-Box">
                <FlexContainer>
                    <div className="White-bg Half-Feature Prevent-Overflow">
                        <HalfContain className="HalfContain Red-bg White Light-Box-Shadow">
                            {this.props.month}/{this.props.day}/{this.props.year} - {this.props.hour}:{this.props.min} {this.props.ampm}
                        </HalfContain>
                        <img src={this.props.imageLink} alt="Something something required" className="Cover"/>
                    </div>
                    <div className="Darkgray-bg Half-Feature Content-Half">
                        <FeatureTitle className="White">{this.props.title}</FeatureTitle>
                        <BreakTitle/>
                        <FeatureDesc className="White">{this.props.description}</FeatureDesc>

                        <div className="Feature-Image-Options Lightgray-bg Scroll-Y">
                            <FlexRight>
                                <PostOptions iconOption="favorite_border"/>
                                <PostOptions iconOption="chat_bubble_outline"/>
                                <PostOptions iconOption="share"/>
                                <PostOptions iconOption="report"/>
                            </FlexRight>
                        </div>
                    </div>
                </FlexContainer>
            </FeatureContent>
        )
    }
}