import React from 'react';
import {createUser} from './axiosRouter';

class CreateUser extends React.Component{
    state = {
        name: '',
        password: '',
        errorMssg: ''
    }

    handleChange = e => {
        this.setState({errorMssg: ''});
        switch(e.target.name){
            case 'name':
                this.setState({name: e.target.value});
                break;
            case 'password':
                this.setState({password: e.target.value});
                break;
            default:
                break; 
        }
    }

    handleSubmit = async(e) => {
        e.preventDefault();
        await createUser(this.state.name, this.state.password);
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>Username: </label>
                <input type="text" name="name" onChange={this.handleChange}/>
                <label>Password: </label>
                <input type="password" name="password" onChange={this.handleChange}/>
                <button type="submit">Create Account</button>
            </form> 
        )
    }
}
export default CreateUser;
