import React from 'react';
import {BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import './App.css';
import RandomPictDog from '../src/projects/randomPictDog/';
import DogPictsByBreed from './projects/dogPictsByBreed';

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
                <Link className="link" to ="/dogpictsbybreed">DogPictsByBreed</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <main>
              <Route exact path="/">Home</Route>
              <Route path="/randompictdog"><RandomPictDog/></Route>
              <Route path="/dogpictsbybreed"><DogPictsByBreed/></Route>
            </main>
          </Switch>
        </div>
      </Router>
      <footer/>
    </>
  );
}

export default App;
