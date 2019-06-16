import React from 'react';
import {deleteFavorite} from './axiosRouter';
import {Button} from 'antd';
import styled from 'styled-components';
import Pokeball from './Pokeball';

const StyledP = styled.p`
    margin-left: 50%;
    text-transform: capitalize;
    font-weight: bolder;
    font-size: 2em;
    color: #1890ff;
`;

const Wrapper = styled.div`
    background-color: rgb(125, 120, 120, .5);
`;

const StyledDiv = styled.div`
    margin-left: 50%;
    display: flex;
    justify-contents: center;
    align-items: center;
`;

class FavoriteEntry extends React.Component{
    state = {
        deleted: false
    }

    deleteFav = async(e) => {
        e.preventDefault();

        await deleteFavorite(this.props.entry.id);
        const userCopy = {...this.props.user};
        userCopy.favorites.splice(this.props.index, 1);
        this.setState({deleted: true});
        this.props.updateFavs(userCopy);
    }

    render(){
        return(
            !this.state.deleted ?
            <Wrapper>
                <StyledP>{this.props.entry.favorite_pokemon}</StyledP>
                <StyledDiv>
                    <Pokeball />
                    <Button type="primary" value="large" onClick={this.deleteFav}>Delete</Button>
                </StyledDiv>
            </Wrapper> : null
        )
    }
}
export default FavoriteEntry;
