import React from 'react';
import {NavLink} from 'react-router-dom';

class Navbar extends React.Component{
    render(){
        return(
            <NavLink to={{pathname: '/loggedIn/update', state: this.props.user}}>Update Profile</NavLink>
        )
    }
}
export default Navbar;
