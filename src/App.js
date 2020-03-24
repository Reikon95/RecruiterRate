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
import AboutUs from './about/AboutUs.js';
import FAQs from './FAQ/FAQs.js';
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
          <Route exact path='/employers'>
            <Employers/>
          </Route>
          <Route exact path='/jobseekers'>
            <Jobseekers/>
          </Route>
          <Route exact path='/aboutus'>
            <AboutUs/>
          </Route>
          <Route exact path='/FAQs'>
            <FAQs/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
