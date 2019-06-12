import React from 'react';
import Navbar from './Navbar'; 

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
