import React from 'react';
import {findUser} from './axiosRouter';
import {BrowserRouter as Router, NavLink} from 'react-router-dom';

class Loginform extends React.Component {
    state = {
        name: '',
        password: '',
        showLogin: true,
        errorMssg: '',
        fanarts: [],
        favorites: []
    }

    submitLogin = async(e) => {
        e.preventDefault();

        let result = (await findUser(this.state.name)).data[0];
        //if username is not found or password does not match 
        if(result === undefined || this.state.password !== result.password){
            this.setState({errorMssg: 'Wrong Username or Password!'});
            return;
        }
        this.setState({showLogin: false, fanarts: result.fanarts, favorites: result.favorites});
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

    render(){
        return(
            <div>
            {
                this.state.showLogin?
                <form onSubmit={this.submitLogin}>
                    <label>Username: </label>
                    <input type="text" name="name" onChange={this.handleChange}/>
                    <label>Password: </label>
                    <input type="password" name="password" onChange={this.handleChange}/>
                    <button type="submit">Login</button>
                </form>:null
            }
                <button>
                    <NavLink to="/newAccount">
                        New Account
                    </NavLink>
                </button>
                <p>{this.state.errorMssg}</p>
            </div>
        )
    }
}
export default Loginform;
