import React from 'react';
import UpdateUser from './UpdateUser';
import Navbar from './Navbar'; 
import {BrowserRouter as Router, NavLink} from 'react-router-dom';

class Homepage extends React.Component{
    state = {
        user: {
            id: '',
            user_name: '',
            password: '',
            fanarts: '',
            favorites: ''
        }
    }

    componentDidMount = () => {
        this.setState({user: this.props.location.state});
    }

    render(){
        return(
            <Navbar user={this.state.user}/> 
        )
    }
}
export default Homepage;
