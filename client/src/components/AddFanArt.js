import React from 'react';

class AddFanArt extends React.Component{
    state = {
        currUrl: '',
        errorMssg: '',
        showError: false 
    }

    urlChange = e => {
        if(this.state.errorMssg !== '')
            this.setState({errorMssg: '', currUrl: e.target.value});
        else
            this.setState({currUrl: e.target.value});
    }
    //Handler for img onError to see if url is an actual image
    invalidURL = e => {
        this.setState({errorMssg: 'Not a proper image URL!'});
    }

    handleSubmit = async(e) => {
        e.preventDefault();
    }

    render(){
        return(
            <div>
                <form>
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
