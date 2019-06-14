import React from 'react';
import {addArt, deleteImage} from './axiosRouter';
import Navbar from './Navbar';
import { Form, Icon, Input, Button } from 'antd';
import styled from 'styled-components';

const StyledButton = styled(Button)`
    width: 100%;
`;

const StyledP = styled.p`
    color: red;
    font-weight: bolder;
    font-size: 3em;
`;

const StyledImage = styled.img`
    max-width: 500px;
    max-height: 500px;
    display: block;
    margin-left: auto;
    margin-right: auto;
`;

class AddFanArt extends React.Component{
    state = {
        currUrl: '',
        errorMssg: '',
        showError: false,
        user: {
            id: '',
            user_name: '',
            password: '',
            fanarts: [{}],
            favorites: []
        } 
    }

    componentDidMount = () => {
        this.setState({user: this.props.location.state});
    }

    urlChange = e => {
        if(this.state.showError || this.state.errorMssg !== '')
            this.setState({showError: false, errorMssg: '', currUrl: e.target.value});
        else
            this.setState({currUrl: e.target.value});
    }

    //Handler for img onError to see if url is an actual image
    invalidURL = e => {
        this.setState({errorMssg: 'Not a proper image URL!'});
    }

    duplicateImage = (url) => {
        let found = false;
        this.state.user.fanarts.forEach(obj => {
            if(url === obj.url)
                found = true;
                return;
        });

        return found ? true: false;
    }

    handleSubmit = async(e) => {
        e.preventDefault();
        this.props.form.validateFields(async(err, values) => {
            if(!err){
                if(this.state.errorMssg !== ''){   
                    this.setState({showError: true});
                    return;
                }
                else if(this.state.currUrl.length > 500){
                    this.setState({showError: true, errorMssg: 'URL is too long! Concider using an URL shortener.'});
                    return;
                }
                else if(this.duplicateImage(values.url)){
                    this.setState({showError: true, errorMssg: 'Already added an image with this URL!'});
                    return;
                }
                //default case 
                let result = (await addArt(values.url, this.props.location.state.id)).data;
                const userCopy = {...this.state.user};
                userCopy.fanarts.push(result);
                this.setState({showError: true, errorMssg: 'Successfully added image! Please feel free to add another', user: userCopy});  
            }
        });
    }
    //handler for deleting a specific fanArt
    deleteImage = async(e) => {
        e.preventDefault();
        let fanArtIndex = e.target.parentElement.getAttribute('index'); 
        let fanArtModelId = this.state.user.fanarts[fanArtIndex].id;
        //Delete from database
        await deleteImage(fanArtModelId);
        //Delete from user fanarts in state
        const userCopy = {...this.state.user};
        userCopy.fanarts.splice(fanArtIndex, 1);
        this.setState({user: userCopy}); 
    }

    render(){
        const { getFieldDecorator } = this.props.form;
        return(
            <div>
                <Navbar user={this.state.user}/>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Item>
                      {getFieldDecorator('url', {
                        rules: [{ required: true, message: 'Please input a url with a image extension!' }],
                      })(
                        <Input
                          prefix={<Icon type="file-image" theme="filled" style={{ color: 'rgba(0,255,0,.8)' }} />}
                          placeholder="Ex: https://i.pinimg.com/originals/05/de/c6/05dec65a440a989f71628da2d76db0f9.jpg"
                          onChange={this.urlChange}
                        />
                      )}
                    </Form.Item>
                    <StyledButton type="primary" value="large" htmlType="submit">Post</StyledButton>
                </Form>
                <StyledImage src={this.state.currUrl} alt='' onError={this.invalidURL}/>
                {
                    this.state.showError ? <StyledP>{this.state.errorMssg}</StyledP> : null
                }
                {
                    this.state.user.fanarts.map((element, index) =>
                        <div key={index} index={index}> 
                            <StyledImage src={element.url} alt="Not Found"/>
                            <StyledButton type="primary" value="large" onClick={this.deleteImage}>Delete</StyledButton> 
                        </div>
                    )
                }
            </div>
        )
    }
}
const PostImage = Form.create({ name: 'post_image' })(AddFanArt);
export default PostImage; 
