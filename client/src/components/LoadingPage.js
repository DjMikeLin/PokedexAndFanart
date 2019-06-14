import React from 'react';
import { Spin } from 'antd';
import styled from 'styled-components';
import StyledSpin from './StyledSpin';

const BottomSpins = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
`;

const TopSpins = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
`;

const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Gif = styled.img`
`;

class LoadingPage extends React.Component{
    render(){
        return(
            <Wrapper>
                <TopSpins>
                    <StyledSpin />
                    <StyledSpin />
                    <StyledSpin />
                    <StyledSpin />
                    <StyledSpin />
                    <StyledSpin />
                    <StyledSpin />
                    <StyledSpin />
                    <StyledSpin />
                    <StyledSpin />
                    <StyledSpin />
                    <StyledSpin />
                    <StyledSpin />
                    <StyledSpin />
                    <StyledSpin />
                    <StyledSpin />
                    <StyledSpin />
                    <StyledSpin />
                    <StyledSpin />
                    <StyledSpin />
                    <StyledSpin />
                    <StyledSpin />
                    <StyledSpin />
                    <StyledSpin />
                    <StyledSpin />
                </TopSpins>
                <Gif src="https://i.ibb.co/zmgFppQ/Bulbasaur.gif"/>
                <BottomSpins>
                    <StyledSpin />
                    <StyledSpin />
                    <StyledSpin />
                    <StyledSpin />
                    <StyledSpin />
                    <StyledSpin />
                    <StyledSpin />
                    <StyledSpin />
                    <StyledSpin />
                    <StyledSpin />
                    <StyledSpin />
                    <StyledSpin />
                    <StyledSpin />
                    <StyledSpin />
                    <StyledSpin />
                    <StyledSpin />
                    <StyledSpin />
                    <StyledSpin />
                    <StyledSpin />
                    <StyledSpin />
                    <StyledSpin />
                    <StyledSpin />
                    <StyledSpin />
                    <StyledSpin />
                    <StyledSpin />
                </BottomSpins>
            </Wrapper>
        )
    }
}
export default LoadingPage;
