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

// export const HalfCard = styled.div`
//     height:calc((100vw - 140px) / 2 - 2vw);
//     width:48%;
//     margin:1%;
// `;

export const FlexContainer = styled.section`
    margin:0 auto;
    justify-content:space-around;
    display:flex;
    align-items:center;
    overflow: hidden;
    flex-wrap: wrap;
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