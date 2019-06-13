import React from 'react';
import FavoriteEntry from './FavoriteEntry';
import Navbar from './Navbar';

class Favorites extends React.Component{
    state = {        
        user: {
            id: '',
            user_name: '',
            password: '',
            fanarts: [],
            favorites: []
        } 
    }

    updateFavs = async(user) => {
        await this.setState({user});
    }

    render(){
        return(
            <div>
                <Navbar user={this.state.user}/>
                {
                    this.props.location.state.favorites.map((element, index) => {
                        return <FavoriteEntry key={index} index={index} entry={element} user={this.props.location.state} updateFavs={this.updateFavs}/>; 
                     })
                }
            </div>
        )
    }
}
export default Favorites;
