import React from 'react';
import UserAvatar from './UserAvatar';
import UserBio from './UserBio';
import UserBlog from './UserBlog';
import UserCompany from './UserCompany';
import UserCreatedAt from './UserCreatedAt';
import UserEmail from './UserEmail';
import UserFollowers from './UserFollowers';
import UserFollowing from './UserFollowing';
import UserHireable from './UserHireable';
import UserLocation from './UserLocation';
import UserLogin from './UserLogin';
import UserName from './UserName';
import UserPublicRepos from './UserPublicRepos';
import UserType from './UserType';
import UserUpdatedAt from './UserUpdatedAt';
import './user.css';

const User = () => {
    return (
        <div className="flexContainer user">
            <div className="userAvatar">
                <UserAvatar/>
                <UserName/>
                <UserLogin/>

            </div>
            <div className="userInfo">
                <UserLocation/>
                <UserEmail/>
                <UserType/>
                <UserBio/>
                <UserCompany/>
                <UserHireable/>
                <UserBlog/>
                <UserPublicRepos/>
                <UserFollowers/>
                <UserFollowing/>
                <UserCreatedAt/>
                <UserUpdatedAt/>
            </div>
        </div>
    )
}

export default User;