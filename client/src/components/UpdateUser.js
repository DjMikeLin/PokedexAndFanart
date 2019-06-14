import React from 'react';
import {updateUser, deleteUser} from './axiosRouter';
import {Redirect} from 'react-router-dom';
import Navbar from './Navbar';
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

    handleSubmit = async(e) => {
        e.preventDefault();
        this.props.form.validateFields(async(err, values) => {
        try{
            const userCopy = {...this.state.user};
            userCopy.user_name = values.username === undefined ? this.state.user.user_name : values.username;
            userCopy.password = values.password === undefined ? this.state.user.password : values.password;
            await updateUser(userCopy);
            this.setState({redirectAfterUpdate: true, user: userCopy, errorMssg: ''});
        }catch(err){
            console.log(err.code);
            this.setState({errorMssg: "Username taken!"});
        }});
    }

    delete = async(e) => {
        e.preventDefault();
        
        await deleteUser(this.state.user.id);
        this.setState({redirectAfterDelete: true}); 
    }

    render(){
        const { getFieldDecorator } = this.props.form;
        
        if(this.state.redirectAfterDelete)
            return <Redirect to="/"/>

        if(this.state.redirectAfterUpdate)
            return <Redirect to={{pathname: "/loggedIn", state: this.state.user}}/>            

        return(
            <div>
                <Navbar user={this.state.user}/>
                <StyledDiv>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Item>
                            {getFieldDecorator('username', {
                            
                            })(
                            <Input
                              prefix={<Icon type="user" style={{ color: 'rgba(0,255,0,.8)' }} />}
                              placeholder={this.state.user.user_name}
                            />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('password', {

                            })(
                            <Input
                              prefix={<Icon type="lock" style={{ color: 'rgba(255,0,0,.8)' }} />}
                              placeholder={this.state.user.password}
                            />
                            )}
                        </Form.Item>
                        <StyledButton type="primary" value="large" htmlType="submit">Update</StyledButton>
                    </Form>
                    <StyledButton type="primary" value="large" onClick={this.delete}>Delete Account</StyledButton>
                    <StyledP>{this.state.errorMssg}</StyledP> 
                </StyledDiv>
            </div>
        )
    }
}
const UserUpdate = Form.create({ name: 'update_user' })(UpdateUser);
export default UserUpdate; 
