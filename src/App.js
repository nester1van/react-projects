import React from 'react';
import {BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import './App.css';
import RandomPictDog from '../src/projects/randomPictDog/';
import DogPictsByBreed from './projects/dogPictsByBreed';
import GitHubClient from './projects/gitHubClient';

function App() {
  return (
    <>
      <header></header>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link className="link" to="/">Home</Link>
              </li>
              <li>
                <Link className="link" to="/randompictdog">RandomPictDog</Link>
              </li>
              <li>
                <Link className="link" to="/dogpictsbybreed">DogPictsByBreed</Link>
              </li>
              <li>
                <Link className="link" to="/githubclient">GitHubClient</Link> 
              </li>
            </ul>
          </nav>
          <main>
          <Switch>
              <Route exact path="/">Home</Route>
              <Route path="/randompictdog"><RandomPictDog/></Route>
              <Route path="/dogpictsbybreed"><DogPictsByBreed/></Route>
              <Route path="/githubclient"><GitHubClient/></Route>  
          </Switch>
          </main>
        </div>
      </Router>
      <footer/>
    </>
  );
}

export default App;
