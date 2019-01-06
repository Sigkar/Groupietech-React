import React, { Component } from 'react';
import styled from 'styled-components';
import Location from '../Images/123mainstreet.jpg';
import Map from '../Images/maps.png';

export const BigHeader = styled.h2`
    letter-spacing: 4px;
    text-align:center;
`
export const HeaderLeftPad = styled.h2`
    letter-spacing:4px;
    text-align:left;
    position:relative;
    margin:0;
    padding-left:5%;
`;



/*
  A regular card title, which can be used on anything but the full card title.
 */
export const CardTitle = styled.h2`
    letter-spacing: 4px;
    text-align:center;
`;

export const CardDate = styled.p`
    letter-spacing: 4px;
    text-align:center;
`;

export const CardData = styled.p`
    letter-spacing: 4px;
    text-align:center;
`;
export const ShortCardHeaderImage = styled.div`
    width:50px;
    height:50px;
    overflow:hidden;
`;
export const ShortCardHeaderTitle = styled.div`
    width:calc(100% - 50px);
    height:50px;
`;
/*
    The main "Full Header" card title.
 */
export const FullCardTitle = styled.h2`
    width:80%;
    padding-left:10%;
    height:50px;
    line-height:50px;
    font-size:32px;
    letter-spacing:3px;
`;
export const CardImageData = styled.img`
    max-height:100%;
    max-width:100%;
    background-position:center center;
    background-size:cover;
`;
export const ShortCardImage = styled.img`
    height:48px;
    width:48px;
`;
export const ShortCardTitle = styled.p`
    text-align:center;
    width:calc(98.5% - 48px);
    position:relative;
    left:1.5%;
    height:48px;
    line-height:50px;
    margin:0;
    padding:0;
    font-size:18px;
`;

export const VenueImage = styled.img`
    width:200px;
    height:200px;
`

export const BottomBorder = styled.div`
    border-bottom:2px solid;
`

export const RemainingContent = styled.div`
    width:calc(100% - 200px);
    height:200px;
`;

export class ShortCard extends Component{
    constructor(props){
        super(props);
        console.log("ShortCard has been called, constructing");
        
    }
    render(){
        return(
            <div className="Full-Short-Card Card-Red-Blue-Pink-Border">
                <ShortCardHeaderImage>
                    <BottomBorder>
                        <ShortCardImage src={Location} alt="Some Text" className="Card-Red-Blue-Pink-Border"/>
                    </BottomBorder>
                </ShortCardHeaderImage>
                <ShortCardHeaderTitle>
                    <BottomBorder className="Card-Red-Blue-Pink-Border White-bg">
                        <ShortCardTitle>{this.props.band} @ {this.props.venue}</ShortCardTitle>
                    </BottomBorder>
                </ShortCardHeaderTitle>
                <VenueImage src={Map} alt="Location of Venue"/>
                <RemainingContent className="Lightgray-bg"></RemainingContent>
            </div>
        )
    }
}