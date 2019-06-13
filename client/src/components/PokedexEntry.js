import React from 'react';
import {addFavorite} from './axiosRouter';

class PokedexEntry extends React.Component{
    state = {
        showAddFav: true
    }

    componentDidMount = () => {
        for(let fav of this.props.user.favorites){
            if(fav.favorite_pokemon === this.props.entry.name){
                this.setState({showAddFav: false});
                break;
            }
        }
    }

    addFav = async(e) => {
        e.preventDefault();
  
        let newFav = (await addFavorite(this.props.entry.name, this.props.user.id)).data;
        const userCopy = {...this.props.user};
        userCopy.favorites.push(newFav);
        this.setState({showAddFav: false});
        this.props.updateFav(userCopy);
    }

    render(){
        return(
            <div>
                <p>{this.props.entry.name}</p>
                {
                    this.state.showAddFav ? 
                    <button onClick={this.addFav}>Add To Favorites</button> : null
                }
                <img src={this.props.entry.url} alt=''/> 
            </div>   
        )
    }
}
export default PokedexEntry;
