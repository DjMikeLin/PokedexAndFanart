import React from 'react'; 
import Navbar from './Navbar';
import {pokedex} from './axiosRouter'; 
import PokedexEntry from './PokedexEntry';
import styled from 'styled-components';

const StyledDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

class Pokedex extends React.Component{
    state = {
        currDex: [],
        user: {
            id: '',
            user_name: '',
            password: '',
            fanarts: [],
            favorites: []
        } 
    }
    //put the initial 30 pokes from pokedex into currDex when component loads
    componentDidMount = async() => {
        this.setState({currDex: (await pokedex(0)).data, user: this.props.location.state}); 
    }

    updateFav = user => {
        this.setState({user});
    }

    render(){
        return(
            <div>
                <Navbar user={this.state.user}/>
                <StyledDiv>
                    {
                        this.state.currDex.map((element, index) => {
                            return <PokedexEntry key={index} entry={element} user={this.state.user} updateFav={this.updateFav}/>; 
                        })
                    }
                </StyledDiv>
            </div> 
        )
    }
}
export default Pokedex;
