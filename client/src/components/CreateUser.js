import React from 'react';
import {createUser} from './axiosRouter';
import {Redirect} from 'react-router-dom';
import { Form, Icon, Input, Button } from 'antd';
import styled from 'styled-components';

const StyledButton = styled(Button)`
    width: 100%;
`;

const StyledDiv = styled.div`
    width: 50%;
    height: 70%;
    position: fixed;
    top: 70%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
`;

const StyledP = styled.p`
    color: red;
    font-weight: bolder;
    font-size: 3em;
`;

class CreateUser extends React.Component{
    state = {
        name: '',
        password: '',
        errorMssg: '',
        redirect: false
    }

    handleSubmit = async(e) => {
        e.preventDefault();
        
        this.props.form.validateFields(async(err, values) => {
            if(!err){
                try{
                    await createUser(values.username, values.password);
                    this.setState({redirect: true});
                }catch(err){
                    console.log(err.code);
                    this.setState({errorMssg: "Username taken!"});
                }
            }
        });
    }

    render(){
        const { getFieldDecorator } = this.props.form;

        if(this.state.redirect)
            return <Redirect to='/' />

        return(
            <StyledDiv>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Item>
                      {getFieldDecorator('username', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                      })(
                        <Input
                          prefix={<Icon type="user" style={{ color: 'rgba(0,255,0,.8)' }} />}
                          placeholder="Username"
                        />,
                      )}
                    </Form.Item>
                    <Form.Item>
                      {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your password!' }],
                      })(
                        <Input
                          prefix={<Icon type="lock" style={{ color: 'rgba(255,0,0,.8)' }} />}
                          placeholder="Password"
                          type="password"
                        />,
                      )}
                    </Form.Item>
                    <StyledButton type="primary" value="large" htmlType="submit">Create Account</StyledButton>
                </Form>
                <StyledP>{this.state.errorMssg}</StyledP>
            </StyledDiv> 
        )
    }
}
const NewUser = Form.create({ name: 'new_user' })(CreateUser);
export default NewUser;
