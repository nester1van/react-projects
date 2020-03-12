import React from 'react';
import FollowerAvatar from './FollowerAvatar';
import FollowerLogin from './FollowerLogin';
import { useParams } from 'react-router-dom';


const Follower = ({ follower }) => {
    const {avatar_url, login} = follower;
    return (
        <div>
            <FollowerAvatar avatarUrl={avatar_url}/>
            <FollowerLogin login={login}/>
        </div>
    )
}

export default Follower;