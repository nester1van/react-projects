import React from 'react';
import { connect } from 'react-redux';

const UserFollowing = ({ following }) => {
    return (
        <p>following : {following}</p>
    )
};

const mapStateToProps = (state) => ({
    following: state.user.data.following
});

export default connect(mapStateToProps)(UserFollowing);