import React from 'react';
import {BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';

import './ThemeBootstrap/MyThemeBootstrap.css';
import './App.css';

import Home from './projects/Home/Home.js';
import RandomPictDog from '../src/projects/randomPictDog/';
import DogPictsByBreed from './projects/dogPictsByBreed';
import GitHubClient from './projects/gitHubClient';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';


const App = () => {
  return (
    <Router>
      <Header/>
      <Main/>
      <Footer/>
    </Router>
  ) 
};

// function App() {
//   return (
//     <>
//       <header></header>
//       <Router>
//         <div>
//           <nav>
//             <ul>
//               <li>
//                 <Link className="link" to="/">Home</Link>
//               </li>
//               <li>
//                 <Link className="link" to="/randompictdog">Random dog picture</Link>
//               </li>
//               <li>
//                 <Link className="link" to="/dogpictsbybreed">Dog pictures by breed</Link>
//               </li>
//               <li>
//                 <Link className="link" to="/githubclient">GitHub Client</Link> 
//               </li>
//             </ul>
//           </nav>
//           <main>
//           <Switch>
//               <Route exact path="/"><Home/></Route>
//               <Route path="/randompictdog"><RandomPictDog/></Route>
//               <Route path="/dogpictsbybreed"><DogPictsByBreed/></Route>
//               <Route path="/githubclient"><GitHubClient/></Route>  
//           </Switch>
//           </main>
//         </div>
//       </Router>
//       <footer/>
//     </Router>
//   );
// }

export default App;
