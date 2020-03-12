import React from 'react';
import { connect } from 'react-redux';

const UserFollowers = ({ followers }) => {
    return (
        <p>followers : {followers}</p>
    )
};

const mapStateToProps = (state) => ({
    followers: state.user.data.followers
});

export default connect(mapStateToProps)(UserFollowers);