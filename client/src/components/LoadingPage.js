import React from 'react';
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
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2fb2821a-1406-4a1d-9b04-6668f278e944/d85ijvr-c2c4a900-5386-4a6a-bee8-5b73e5235ebf.png/v1/fill/w_417,h_250,q_70,strp/pokemon_x_and_y_forest_battle_background_by_phoenixoflight92_d85ijvr-250t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDgwIiwicGF0aCI6IlwvZlwvMmZiMjgyMWEtMTQwNi00YTFkLTliMDQtNjY2OGYyNzhlOTQ0XC9kODVpanZyLWMyYzRhOTAwLTUzODYtNGE2YS1iZWU4LTViNzNlNTIzNWViZi5wbmciLCJ3aWR0aCI6Ijw9ODAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.2719bNqoI3vCafSSNoBVwDT3puLbQr_i_LuEkFPkAUE');
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
                <img src="https://i.ibb.co/zmgFppQ/Bulbasaur.gif" alt="Gif not found"/>
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
