import React from 'react'; 
import Navbar from './Navbar';
import {pokedex} from './axiosRouter'; 
import PokedexEntry from './PokedexEntry';
import LoadingPage from './LoadingPage';
import styled from 'styled-components';
import { Pagination } from 'antd';

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
        },
        loading: true,
        offset: 0,
        total: 0,
        currPage: 1 
    }
    //put the initial 30 pokes from pokedex into currDex when component loads
    componentDidMount = async() => {
        let dex = (await pokedex(this.state.offset)).data;
        await this.setState({loading: false, total: dex.count, currDex: dex.results, user: this.props.location.state}); 
    }

    updateFav = user => {
        this.setState({user});
    }
    //Pagination change handler
    pageChange = async(num) => {
        let newOffset = this.getOffset(num);
        await this.setState({loading: true, offset: newOffset, currPage: num});
        await this.setState({loading: false, currDex: (await pokedex(newOffset)).data.results}); 
    }
    //find offset value base on num param
    getOffset = num => {
        return (num * 30) - 30;
    }

    render(){
        return(
            this.state.loading ? <LoadingPage /> :
            <div>
                <Navbar user={this.state.user} selected="5"/>
                <StyledDiv>
                    {
                        this.state.currDex.map((element, index) => {
                            return <PokedexEntry key={index} entry={element} user={this.state.user} updateFav={this.updateFav}/>; 
                        })
                    }
                </StyledDiv>
                <Pagination showQuickJumper defaultCurrent={this.state.currPage} pageSize={30} total={this.state.total} onChange={this.pageChange}/>
            </div> 
        )
    }
}
export default Pokedex;
