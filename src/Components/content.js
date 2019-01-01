import styled from 'styled-components';

export const CardTitle = styled.h2`
    text-align:center;

`;
export const FullCardTitle = styled.h2`
    text-align:Center;
    height:50px;
    line-height:50px;
    font-size:32px;
    letter-spacing:3px;
`;

export const SideBar = styled.nav`
    width:50px;
    height:100vh;
    position:fixed;
    left:0px;
    top:0px;
`;
export const NavTile = styled.div`
    width:50px;
    height:50px;
    cursor:pointer;
    :hover{
        filter:brightness(105%);
        -ms-filter:brightness(105%);
        -moz-filter:brightness(105%);
        -webkit-filter:brightness(105%);
        -o-filter:brightness(105%);
    }
`;