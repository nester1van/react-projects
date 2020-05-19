import React from 'react';
import { connect } from 'react-redux';

const UserFollowers = ({ followers }) => {
    return (
        <p><strong>followers: </strong>{followers}</p>
    )
};

const mapStateToProps = (state) => ({
    followers: state.user.data.followers
});

export default connect(mapStateToProps)(UserFollowers);