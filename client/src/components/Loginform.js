import React from 'react';
import {findUser} from './axiosRouter';
import {Redirect, NavLink} from 'react-router-dom';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import styled from 'styled-components';

const StyledButton = styled(Button)`
    width: 200px;
`;

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
        this.props.form.validateFields(async(err, values) => {
            if(!err){
                let result = (await findUser(values.username)).data[0];
                //if username is not found or password does not match 
                if(result === undefined || values.password !== result.password){
                    this.setState({errorMssg: 'Wrong Username or Password!'});
                    return;
                }
                //default
                this.setState({showLogin: false, id: result.id, fanarts: result.fanarts, favorites: result.favorites});
            }
        });
    }

    componentDidMount = () => {
        this.setState({id: '', user_name: '', password: '', showLogin: true, errorMssg: '', fanarts: [], favorites: []});
    }

    render(){
        const { getFieldDecorator } = this.props.form;
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
                <Form onSubmit={this.submitLogin} className="login-form">
                    <Form.Item>
                      {getFieldDecorator('username', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                      })(
                        <Input
                          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                          placeholder="Username"
                        />,
                      )}
                    </Form.Item>
                    <Form.Item>
                      {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your password!' }],
                      })(
                        <Input
                          prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                          placeholder="Password"
                          type="password"
                        />,
                      )}
                    </Form.Item>
                    <StyledButton type="primary" value="large" htmlType="submit">Login</StyledButton>
                </Form>
                <StyledButton type="primary" value="large">
                    <NavLink to="/newAccount">
                        Sign Up
                    </NavLink>
                </StyledButton>
                <p>{this.state.errorMssg}</p>
            </div>
        )
    }
}
const VerticalLogin = Form.create({ name: 'vert_login' })(Loginform);
export default VerticalLogin;
