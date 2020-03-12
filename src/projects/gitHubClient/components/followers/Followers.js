import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Follower from './Follower';
import Pagination from '../pagination/Pagination';

const Followers = ({ followers }) => {
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        setCurrentPage(1);
    }, [followers]);

    const numFollowers = followers.length;
    const followersOnPage = 5;
    const numPages = Math.ceil(numFollowers/followersOnPage);

    const handleChange = (val) => {
        setCurrentPage(val);
    } 
    return (
        <>  
            <Pagination min={1} max={numPages} value={currentPage} onChange={handleChange}/>
            {followers.slice((currentPage - 1) * followersOnPage, 
                    currentPage * followersOnPage)
                .map(follower => 
                <Follower key={follower.login} follower={follower}/>
            )}
        </>

    )
};

const mapStateToProps = (state) => ({
    followers: state.followers.data
})

export default connect(mapStateToProps)(Followers);