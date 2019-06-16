import React from 'react';
import Navbar from './Navbar'; 
import styled from 'styled-components';

const StyledGif = styled.img`
    margin-left: 25%;
    height: 90vh;
`;

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
            <div>
                <Navbar user={this.state.user} selected='1'/> 
                <StyledGif src="https://i.ibb.co/6sSM9Wv/Rayquaza-Mega.gif"/> 
            </div>
        )
    }
}
export default Homepage;
