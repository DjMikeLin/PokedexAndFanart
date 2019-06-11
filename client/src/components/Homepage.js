import React from 'react';
import UpdateUser from './UpdateUser';

class Homepage extends React.Component{
    state = {
        user: {
            name: '',
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
            <p>hi</p>
        )
    }
}
export default Homepage;
