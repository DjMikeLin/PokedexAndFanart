import React from 'react';
import {createUser} from './axiosRouter';

class CreateUser extends React.Component{
    state = {
        name: '',
        password: '',
        errorMssg: ''
    }

    render(){
        return(
            <form>
                <label>Username: </label>
                <input type="text" name="name"></input>
                <label>Password: </label>
                <input type="password" name="password"></input>
                <button type="submit">Create Account</button>
            </form> 
        )
    }
}
export default CreateUser;
