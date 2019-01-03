import styled from 'styled-components';
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


export const FlexContainer = styled.section`
    display:flex;
    justify-content:space-around;
    align-items:center;
    flex-wrap: wrap;
    flex-direction: row;
`;

export const SmallTile = styled.div`
    width:9vw;
    height:9vw;
    margin:.5vw;
    border-radius:4px;
`;
export const PageContainer = styled.div`
    width:calc(100% - 140px);
    height:auto;
    min-height:100vh;
    position:relative;
    left:70px;
`
