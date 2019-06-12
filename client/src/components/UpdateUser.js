import React from 'react';
import {updateUser, deleteUser} from './axiosRouter';
import {Redirect} from 'react-router-dom';

class UpdateUser extends React.Component{
    state = {
        user: {
            id: '',
            user_name: '',
            password: '',
            fanarts: '',
            favorites: ''
        },
        errorMssg: '',
        redirectAfterDelete: false,
        redirectAfterUpdate: false    
    }

    componentDidMount = () => {
        this.setState({user: this.props.location.state});
    }

    handleChange = e => {
        if(this.state.errorMssg !== '')
            this.setState({errorMssg: ''});

        const userCopy = {...this.state.user};
        userCopy[e.target.name] = e.target.value;
        this.setState({user: userCopy});
    }

    handleSubmit = async(e) => {
        e.preventDefault();
        try{
            await updateUser(this.state.user);
            this.setState({redirectAfterUpdate: true});
        }catch(err){
            console.log(err.code);
            this.setState({errorMssg: "Username taken!"});
        }
    }

    delete = async(e) => {
        e.preventDefault();
        
        await deleteUser(this.state.user.id);
        this.setState({redirectAfterDelete: true}); 
    }

    render(){
        if(this.state.redirectAfterDelete)
            return <Redirect to="/"/>

        if(this.state.redirectAfterUpdate)
            return <Redirect to={{pathname: "/loggedIn", state: this.state.user}}/>            

        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Username: </label>
                    <input type="text" name="user_name" onChange={this.handleChange} placeholder={this.state.user.user_name}/>
                    <label>Password: </label>
                    <input type="password" name="password" onChange={this.handleChange} placeholder={this.state.user.password}/>
                    <button type="submit">Update</button>
                </form>
                <button onClick={this.delete}>Delete Account</button>
                <p>{this.state.errorMssg}</p> 
            </div>
        )
    }
}
export default UpdateUser; 
