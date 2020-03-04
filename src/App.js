import React from 'react';
import {BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import './App.css';
import RandomPictDog from '../src/projects/randomPictDog/';

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/randompictdog">RandomPictDog</Link>
          </li>
        </ul>
        <hr/>
        <Switch>
          <Route exact path="/">Home</Route>
          <Route path="/randompictdog"><RandomPictDog/></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
