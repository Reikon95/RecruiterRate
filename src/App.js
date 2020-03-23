import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import {Switch, Route} from 'react-router-dom';
import './App.css';
import LandingPage from './landingpage/LandingPage.js'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <LandingPage/>
          </Route>
          <Route exact path='/'>
            <LandingPage/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
