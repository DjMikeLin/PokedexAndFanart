import React from 'react';
import {findUser} from './axiosRouter';
import {Redirect, NavLink} from 'react-router-dom';

class Loginform extends React.Component {
    state = {
        id: '',
        user_name: '',
        password: '',
        showLogin: true,
        errorMssg: '',
        fanarts: [],
        favorites: []
    }

    submitLogin = async(e) => {
        e.preventDefault();

        let result = (await findUser(this.state.user_name)).data[0];
        //if username is not found or password does not match 
        if(result === undefined || this.state.password !== result.password){
            this.setState({errorMssg: 'Wrong Username or Password!'});
            return;
        }
        this.setState({showLogin: false, id: result.id, fanarts: result.fanarts, favorites: result.favorites});
    }

    handleChange = e => {
        this.setState({errorMssg: ''});
        switch(e.target.name){
            case 'user_name':
                this.setState({user_name: e.target.value});
                break;
            case 'password':
                this.setState({password: e.target.value});
                break;
            default:
                break; 
        }
    }

    render(){
        if(!this.state.showLogin)
            return <Redirect to={{pathname: '/loggedIn', state: 
                                { 
                                    id: this.state.id,
                                    user_name: this.state.user_name, 
                                    password: this.state.password, 
                                    fanarts: this.state.fanarts, 
                                    favorites: this.state.favorites
                                }
            }}/>;           

        return(
            <div>
                <form onSubmit={this.submitLogin}>
                    <label>Username: </label>
                    <input type="text" name="user_name" onChange={this.handleChange}/>
                    <label>Password: </label>
                    <input type="password" name="password" onChange={this.handleChange}/>
                    <button type="submit">Login</button>
                </form>
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
