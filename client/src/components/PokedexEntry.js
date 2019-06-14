import React from 'react';
import { addFavorite, deleteFavorite } from './axiosRouter';
import { Icon } from 'antd';
import styled from 'styled-components';

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 1em;
    height: 8%;
`;

const StyledP = styled.p`
    color: #1890ff;
    text-transform: capitalize;
`;

class PokedexEntry extends React.Component{
    state = {
        theme: 'outlined',
        favModelId: '',
        favArrId: '',
        user: {
            id: '',
            user_name: '',
            password: '',
            fanarts: [],
            favorites: []
        }
    }

    componentDidMount = () => {
        this.setState({user: this.props.user});
        for(let [index, fav] of this.props.user.favorites.entries()){
            if(fav.favorite_pokemon === this.props.entry.name){
                this.setState({theme: 'filled', favModelId: fav.id, favArrId: index});
                break;
            }
        }
    }

    toggleFav = async(e) => {
        e.preventDefault();
        const userCopy = {...this.state.user};
        //add fav 
        if(this.state.theme === 'outlined'){
            let newFav = (await addFavorite(this.props.entry.name, this.props.user.id)).data;
            userCopy.favorites.push(newFav);
            this.props.updateFav(userCopy);
            this.setState({favModelId: newFav.id});
        }
        else{//remove fav
            await deleteFavorite(this.state.favModelId);
            userCopy.favorites.splice(this.state.favArrId, 1);
            this.props.updateFav(userCopy);
        }
        this.setState({user: userCopy, theme: this.state.theme === 'outlined' ? 'filled' : 'outlined'});
    }

    render(){
        return(
            <StyledDiv>
                <StyledP>{this.props.entry.name}</StyledP>
                <img src={this.props.entry.url} alt=''/> 
                <Icon type="heart" theme={this.state.theme} onClick={this.toggleFav} style={{ color: '#ff0087'}}/>
            </StyledDiv>   
        )
    }
}
export default PokedexEntry;
