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
                <Link className="link" to={process.env.PUBLIC_URL + "/"}>Home</Link>
              </li>
              <li>
                <Link className="link" to={process.env.PUBLIC_URL + "/randompictdog"}>RandomPictDog</Link>
              </li>
              <li>
                <Link className="link" to={process.env.PUBLIC_URL + "/dogpictsbybreed"}>DogPictsByBreed</Link>
              </li>
              <li>
                <Link className="link" to={process.env.PUBLIC_URL + "/githubclient"}>GitHubClient</Link> 
              </li>
            </ul>
          </nav>
          <main>
          <Switch>
              <Route exact path={process.env.PUBLIC_URL + "/"}>Home</Route>
              <Route path={process.env.PUBLIC_URL + "/randompictdog"}><RandomPictDog/></Route>
              <Route path={process.env.PUBLIC_URL + "/dogpictsbybreed"}><DogPictsByBreed/></Route>
              <Route path={process.env.PUBLIC_URL + "/githubclient"}><GitHubClient/></Route>  
          </Switch>
          </main>
        </div>
      </Router>
      <footer/>
    </>
  );
}

export default App;
