import React from 'react';
import Loginform from './components/Loginform';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CreateUser from './components/CreateUser';
import Homepage from './components/Homepage';
import UpdateUser from './components/UpdateUser';
import AddFanArt from './components/AddFanArt';
import Pokedex from './components/Pokedex';
import Favorites from './components/Favorites';

function App() {
  return (
        <div>{
            <Router>
                <Switch>
                    <Route exact path="/" component={Loginform}/>
                    <Route exact path="/newAccount" component={CreateUser}/>
                    <Route exact path="/loggedIn" component={Homepage}/>
                    <Route exact path="/loggedIn/update" component={UpdateUser}/>
                    <Route exact path='/loggedIn/postArt' component={AddFanArt}/>
                    <Route exact path='/loggedIn/pokedex' component={Pokedex}/>
                    <Route exact path='/loggedIn/favorites' component={Favorites}/>
                </Switch>
            </Router>}
        </div>
  );
}

export default App;
