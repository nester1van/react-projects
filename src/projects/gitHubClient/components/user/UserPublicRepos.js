import React from 'react';
import { connect } from 'react-redux';

const UserPublicRepos = ({ publicRepos }) => {
    return (
        <p>public repositories : {publicRepos}</p>
    )
};

const mapStateToProps = (state) => ({
    publicRepos: state.user.data.public_repos
});

export default connect(mapStateToProps)(UserPublicRepos);