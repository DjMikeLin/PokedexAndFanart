import React from 'react';
import {deleteFavorite} from './axiosRouter';
import {Button} from 'antd';
import styled from 'styled-components';

const StyledP = styled.p`
    color: #1890ff;
`;

const StyledDiv = styled.div`
    margin-left: 50%;
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
            <StyledDiv>
                <StyledP>{this.props.entry.favorite_pokemon}</StyledP>
                <Button type="primary" value="large" onClick={this.deleteFav}>Delete</Button>
            </StyledDiv> : null
        )
    }
}
export default FavoriteEntry;
