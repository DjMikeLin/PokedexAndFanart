import React from 'react';

class Loginform extends React.Component {
    state = {
        showLogin: true
    }

    submitLogin = e => {
        e.preventDefault();
        this.setState({showLogin: false});
    }

    render(){
        return(
            this.state.showLogin?
            <form onSubmit={this.submitLogin}>
                <input type="text" name="name"/>
                <input type="password" name="password"/>
                <input type="submit"/>
            </form>:null
        )
    }
}
export default Loginform;
