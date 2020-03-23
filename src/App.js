import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import {Switch, Route} from 'react-router-dom';
import './App.css';
import LandingPage from './landingpage/LandingPage.js'
import Login from './login/Login.js';
import SignUp from './signup/Signup.js';
import Recruiters from './recruiters/Recruiters.js';
import Employers from './employers/Employers.js';
import Jobseekers from './jobseekers/Jobseekers.js';
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
          <Route exact path='/recruiters'>
            <Recruiters/>
          </Route>
          <Route exact path='/Employers'>
            <Employers/>
          </Route>
          <Route exact path='/Jobseekers'>
            <Jobseekers/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
