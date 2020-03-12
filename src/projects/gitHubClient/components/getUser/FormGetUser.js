import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getUser } from '../../redux/user/actions';
import { getFollowers } from '../../redux/followers/actions';

const FormGetUser = ({ getUser, getFollowers }) => {
    const [userLogin, setUserLogin] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        getUser(userLogin);
        getFollowers(userLogin);
    }
    const handleChange = (e) => {
        const value = e.target.value;
        setUserLogin(value);
    }

    return (
        <form onSubmit={handleSubmit} style={{display: 'inline'}}>
            <input 
                type='text' 
                onChange={handleChange}
                placeholder='type user login here...'
                value={userLogin}/>
            <input 
                type='submit'
                className='submit'/>
        </form>
    )
}

export default connect(null, { getUser, getFollowers })(FormGetUser);