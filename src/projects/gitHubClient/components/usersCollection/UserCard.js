import React from 'react';
import UserAvatar from './UserAvatar';
import UserLogin from './UserLogin';

const UserCard = ({ user }) => {
    const {avatar_url, login} = user;
    return (
        <div className="userCard">
            <UserAvatar avatarUrl={avatar_url}/>
            <UserLogin login={login}/>
        </div>
    )
}

export default UserCard;