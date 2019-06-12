import React from 'react';
import {addArt} from './axiosRouter';
import Navbar from './Navbar';

class AddFanArt extends React.Component{
    state = {
        currUrl: '',
        errorMssg: '',
        showError: false,
        user: {
            id: '',
            user_name: '',
            password: '',
            fanarts: [],
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

        if(this.state.errorMssg !== ''){   
            this.setState({showError: true});
            return;
        }
        else if(this.state.currUrl.length > 500){
            this.setState({showError: true, errorMssg: 'URL is too long! Concider using an URL shortener.'});
            return;
        }
        else if(this.duplicateImage(this.state.currUrl)){
            this.setState({showError: true, errorMssg: 'Already added an image with this URL!'});
            return;
        }
        //default case 
        let result = (await addArt(this.state.currUrl, this.props.location.state.id)).data;
        const userCopy = {...this.state.user};
        userCopy.fanarts.push(result);
        this.setState({showError: true, errorMssg: 'Successfully added image! Please feel free to add another', user: userCopy});  
    }

    render(){
        return(
            <div>
                <Navbar user={this.state.user}/>
                <form onSubmit={this.handleSubmit}>
                    <label>Image URL</label>
                    <input type="url" name="url" onChange={this.urlChange}/>
                    <button type="submit">Post</button>
                </form>
                <img src={this.state.currUrl} alt='' onError={this.invalidURL}/>
                {
                    this.state.showError ? <p>{this.state.errorMssg}</p> : null
                }
            </div>
        )
    }
}
export default AddFanArt; 
