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

    componentDidMount = () => {
        this.setState({user: this.props.location.state});
    }

    updateFavs = user => {
        this.setState({user});
    }

    render(){
        return(
            <div>
                <Navbar user={this.state.user} selected="2"/>
                {
                    this.state.user.favorites.map((element, index) => {
                        return <FavoriteEntry key={index} index={index} entry={element} user={this.state.user} updateFavs={this.updateFavs}/>; 
                    })
                }
            </div>
        )
    }
}
export default Favorites;
