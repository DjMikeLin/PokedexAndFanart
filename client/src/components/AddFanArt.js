import React from 'react';
import {addArt, deleteImage} from './axiosRouter';
import Navbar from './Navbar';
import { Form, Icon, Input, Button, Upload, message } from 'antd';
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

const Dragger = Upload.Dragger;
const props = {
  data: {
        url: "https://cdn.vox-cdn.com/thumbor/3ajecDMOIH59cbOeyO0bap_4wj4=/0x0:2257x1320/1200x800/filters:focal(949x480:1309x840)/cdn.vox-cdn.com/uploads/chorus_image/image/63738986/pokemon.0.0.png",
        file: "http://localhost:8000/api/v1/fanarts/https%3A/assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
        user: 14 
  },
  name: 'file',
  multiple: true,
  action: '/api/v1/fanarts/',
  onChange(info) {
    const status = info.file.status;
    console.log(info.file)
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};
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
                  <Dragger {...props}>
    <p className="ant-upload-drag-icon">
      <Icon type="inbox" />
    </p>
    <p className="ant-upload-text">Click or drag file to this area to upload</p>
    <p className="ant-upload-hint">Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files</p>
  </Dragger>
            </div>
        )
    }
}
const PostImage = Form.create({ name: 'post_image' })(AddFanArt);
export default PostImage; 
