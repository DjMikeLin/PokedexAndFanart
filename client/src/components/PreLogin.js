import React from 'react';
import { getUsers } from './axiosRouter';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Menu, Icon } from 'antd';

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: red;
    font-weight: bolder;
    font-size: 1.5em; 
`;

class PreLogin extends React.Component{
    state = {
        fanArts: [{}]
    }

    componentDidMount = async() => {
        const arts = [];
        (await getUsers()).data.forEach(user => {
            user.fanarts.forEach(art => {
                arts.push({user: user.user_name, date: art.create_date, url: art.url});      
            });
        });

        arts.sort((a, b) => {
            return new Date(b.date) - new Date(a.date);
        });
        
        this.setState({fanArts: arts});
    }

    render(){
        return(
            <div>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={[this.props.selected]}
                    style={{ lineHeight: '64px' }}
                >

                    <Menu.Item key="1" style={{ 'marginLeft': '80%' }}>
                        <NavLink to={{pathname: '/login', state: this.props.user}}>
                            <Icon type="crown" spin="true"/>
                            Login/Sign-Up
                        </NavLink>
                    </Menu.Item>
                </Menu>

                <StyledDiv>   
                    {
                        this.state.fanArts.map(art => {
                            return(
                                <div>
                                    <img src={art.url} alt="No Image Found!"/>
                                    <p>
                                        By: {art.user}
                                    </p>
                                    <p>
                                        Create: {art.date}
                                    </p>           
                                </div>
                            )
                        }) 
                    } 
                </StyledDiv>
            </div>
        )
    }
}
export default PreLogin; 
