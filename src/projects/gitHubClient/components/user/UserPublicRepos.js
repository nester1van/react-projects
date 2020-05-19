import React from 'react';
import { connect } from 'react-redux';

const UserPublicRepos = ({ publicRepos }) => {
    return (
        <p><strong>public repositories: </strong>{publicRepos}</p>
    )
};

const mapStateToProps = (state) => ({
    publicRepos: state.user.data.public_repos
});

export default connect(mapStateToProps)(UserPublicRepos);