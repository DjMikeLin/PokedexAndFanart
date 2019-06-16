import React from 'react';
import {NavLink} from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';

const { Header } = Layout;
class Navbar extends React.Component{
    render(){
        return(
            <Layout>
                <Header className="header">
                  <div className="logo" />
                  <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={[this.props.selected]}
                    style={{ lineHeight: '64px' }}
                  >

                    <Menu.Item key="1" style={{ 'marginRight': '20%' }}>
                        <NavLink to={{pathname: '/loggedIn', state: this.props.user}}>
                            <Icon type="crown" spin="true"/>
                            Dashboard
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <NavLink to={{pathname: '/loggedIn/favorites', state: this.props.user}}>
                            <Icon type="heart" spin="true"/>
                            Favorite Pokemons
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <NavLink to={{pathname: '/loggedIn/update', state: this.props.user}}>
                            <Icon type="thunderbolt" spin="true"/>
                            Update Profile
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="4">
                        <NavLink to={{pathname: '/loggedIn/postArt', state: this.props.user}}>
                            <Icon type="file-image" spin="true"/>
                            Post Image
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="5">
                        <NavLink to={{pathname: '/loggedIn/pokedex', state: this.props.user}}>
                            <Icon type="api" spin="true"/>
                            Pokedex
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="6">
                        <NavLink to={'/'}>
                            <Icon type="frown" spin="true"/>
                            Logoff
                        </NavLink>
                    </Menu.Item>
                  </Menu>
                </Header>   
            </Layout>
        )
    }
}
export default Navbar;
