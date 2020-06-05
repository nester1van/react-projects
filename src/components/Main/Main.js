import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../../projects/Home/Home'
import RandomPictDog from '../../projects/randomPictDog';
import DogPictsByBreed from '../../projects/dogPictsByBreed';
import GitHubClient from '../../projects/gitHubClient';

const Main = () => {
    return (
        <main>
            <Switch>
                <Route exact path="/"><Home/></Route>
                <Route path="/randompictdog"><RandomPictDog/></Route>
                <Route path="/dogpictsbybreed"><DogPictsByBreed/></Route>
                <Route path="/githubclient"><GitHubClient/></Route>  
            </Switch>
        </main>
    )
}
export default Main;