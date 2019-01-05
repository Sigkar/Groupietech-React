import React, {Component} from 'react';
import styled from 'styled-components';
import {PopFromNothing } from '../Components/staticposes.js';
import {FunctionIcon} from './navigation.js';

export const HeaderButton = styled.button`
    outline:none;
    height:44px;
    width:94px;
    border:3px solid;
    border-image: linear-gradient(to top left, rgba(191, 63, 63, 1) 33.33%, rgba(255, 84, 5, 1) 66.66%, rgba(175, 0, 103, 1) 100%) 5;
    position:relative;
    top:7.5px;
    background:transparent;
    margin-right:10px;
    cursor:pointer;

    transition:border-image 0.4s, border-color 0.2s;
    -ms-transition:border-image 0.4s, border-color 0.2s;
    -moz-transition:border-image 0.4s, border-color 0.2s;
    -webkit-transition:border-image 0.4s, border-color 0.2s;
    -o-transition:border-image 0.4s, border-color 0.2s;
    border-color:rgba(239, 0, 107, 1);


    font-size:16px;
    :hover{
        border-image:none;
        border-color:rgba(10, 193, 255, 1);
    }
`
export const Overlay = styled.div`
    position:fixed;
    top:0px;
    left:0px;
    width:100vw;
    height:100vh;
    background:rgba(0,0,0,0.3);
    z-index:200000;
`;
export const LogModal = styled.div`
    width:80vw;
    height:90vh;
    position:absolute;
    top:5vh;
    left:10vw;
    border-radius:5px;
    z-index:200001;
    display:flex;
    flex-direction:row;
    flex-wrap: wrap;
`;
export const HalfModal = styled.div`
    width:50%;
    height:100%;
`;
export const HeaderButtonContainer = styled.div`
    display:flex;
    flex-direction:row;
    float:right;
    width:220px;
    height:60px;

    transform:translateX(-50px);
    -ms-transform:translateX(-50px);
    -moz-transform:translateX(-50px);
    -webkit-transform:translateX(-50px);
    -o-transform:translateX(-50px);
`

export const TextInput = styled.div`
    *{
        outline:none;
        border:3px solid;
        border-image:linear-gradient(to top left, rgba(175, 0, 103, 1) 0%, rgba(191, 63, 63, 1) 0100%) 5;
        :focus{
            border-image:none;
        }
    }
`

export class ModalOverlay extends Component{

    render(){
        return(
            <Overlay>
                <PopFromNothing>
                    <LogModal className="White-bg">
                        <HalfModal>
                        <img src={this.props.image} alt="Login" className="Cover Left-Radii"/>
                        </HalfModal>
                        
                        <HalfModal>
                            <p>Create Account</p>
                        </HalfModal>
                        <FunctionIcon navIcon="close" classOption="Darkgray-children Modal-Button" functionOption={this.props.functionOption} />
                    </LogModal>
                </PopFromNothing>
            </Overlay>
        )
    }

}