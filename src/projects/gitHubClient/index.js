import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Link, Switch, Route, useRouteMatch } from 'react-router-dom';
import Zen from './components/Zen';
import User from './components/user/User';
import Followers from './components/followers/Followers';
import Followings from './components/followings/Followings';
import Repos from './components/repos/Repos';
import GetUser from './components/getUser/GetUser';
import './index.css';

const GitHubClient = () => {
    const { path, url } = useRouteMatch();

    return (
        <>
            <Provider store={store}>
                <GetUser/>
                <nav className='setMaxWidth'>
                    <ul>
                        <li>
                            <Link className='link' to={`${url}`}>User</Link>
                        </li>
                        <li>
                            <Link className='link' to={`${url}/followers`}>Followers</Link>
                        </li>
                        <li>
                            <Link className='link' to={`${url}/followings`}>Followings</Link>
                        </li>
                        <li>
                            <Link className='link' to={`${url}/repos`}>Repos</Link>
                        </li>
                        <li>
                            <Link className='link' to={`${url}/zen`}>Zen</Link>
                        </li>

                    </ul>
                </nav>
                <Switch>
                    <Route exact path={process.env.PUBLIC_URL + `${path}`}>
                        <User/>
                    </Route>
                    <Route path={process.env.PUBLIC_URL + `${path}/followers`}>
                        <Followers/>
                    </Route>
                    <Route path={process.env.PUBLIC_URL + `${path}/followings`}>
                        <Followings/>
                    </Route>
                    <Route path={process.env.PUBLIC_URL + `${path}/repos`}>
                        <Repos/>
                    </Route>
                    <Route path={process.env.PUBLIC_URL + `${path}/zen`}>
                        <Zen/>
                    </Route>
                </Switch>
            </Provider>
        </>
    )
}

export default GitHubClient;