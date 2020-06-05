import React, { useState } from 'react';
import { connect } from 'react-redux';

import StatusGetUser from './StatusGetUser';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './getUser.css';

import { getUser } from '../../redux/user/actions';
import { getFollowers } from '../../redux/followers/actions';
import { getFollowings } from '../../redux/followings/actions';
import { getRepos } from '../../redux/repos/actions';

const FormGetUser = ({ getUser, getFollowers, getFollowings, getRepos }) => {
    const [userLogin, setUserLogin] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        getUser(userLogin);
        getFollowers(userLogin);
        getFollowings(userLogin);
        getRepos(userLogin);
    }
    const handleChange = (e) => {
        const value = e.target.value;
        setUserLogin(value);
    }

    return (
        <div className="formGetUser">
            <Form onSubmit={handleSubmit} inline>
                <Form.Control 
                onChange={handleChange} 
                value={userLogin}
                type="text" 
                placeholder="type user login here..."
                />
                <Button 
                    variant="dark"
                    type='submit'
                    className='submit'>
                    Submit
                </Button>
                <StatusGetUser/>     
            </Form>
        </div>
    )
}

export default connect(null, { getUser, getFollowers, getFollowings, getRepos })(FormGetUser);