import React from 'react';

class UpdateUser extends React.Component{
    state = {
        
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
export default UpdateUser; 
