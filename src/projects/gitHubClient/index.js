import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Zen from './components/zen/Zen';
import User from './components/user/User';
import Followers from './components/followers/Followers';
import Followings from './components/followings/Followings';
import Repos from './components/repos/Repos';
import GetUser from './components/getUser/GetUser';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import './index.css';

const GitHubClient = () => {

    return (
        <>
            <Provider store={store}>
                <GetUser/>
                <Tabs defaultActiveKey="user" variant="pills">
                    <Tab eventKey="user" title="user" className="tab"><User/></Tab>
                    <Tab eventKey="followers" title="followers"><Followers/></Tab>
                    <Tab eventKey="followings" title="followings"><Followings/></Tab>
                    <Tab eventKey="repos" title="repos"><Repos/></Tab>
                    <Tab eventKey="zen" title="zen"><Zen/></Tab>
                </Tabs>
            </Provider>
        </>
    )
}

export default GitHubClient;