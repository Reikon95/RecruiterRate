import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import {Switch, Route} from 'react-router-dom';
import './App.css';
import LandingPage from './landingpage/LandingPage.js'
import Login from './login/Login.js';
import SignUp from './signup/Signup.js';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <LandingPage/>
          </Route>
          <Route exact path='/login'>
            <Login/>
          </Route>
          <Route exact path='/signup'>
            <SignUp/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
