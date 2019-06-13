import React from 'react';
import {deleteFavorite} from './axiosRouter';

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
            <div>
                <p>{this.props.entry.favorite_pokemon}</p>
                <button onClick={this.deleteFav}>Delete</button>
            </div> : null
        )
    }
}
export default FavoriteEntry;
