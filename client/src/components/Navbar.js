import React from 'react';
import {NavLink} from 'react-router-dom';

class Navbar extends React.Component{
    render(){
        return(
            <div>   
                <NavLink to={{pathname: '/loggedin', state: this.props.user}}>Dashboard</NavLink>
                <NavLink to={{pathname: '/loggedIn/update', state: this.props.user}}>Update Profile</NavLink>
                <NavLink to={{pathname: '/loggedIn/postArt', state: this.props.user}}>Post Image</NavLink>
            </div>
        )
    }
}
export default Navbar;
