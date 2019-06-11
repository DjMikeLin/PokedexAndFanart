import React from 'react';
import Loginform from './components/Loginform';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CreateUser from './components/CreateUser';

function App() {
  return (
        <div>{
            <Router>
                <Switch>
                    <Route exact path="/" component={Loginform}/>
                    <Route exact path="/newAccount" component={CreateUser}/>
                </Switch>
            </Router>}
        </div>
  );
}

export default App;
