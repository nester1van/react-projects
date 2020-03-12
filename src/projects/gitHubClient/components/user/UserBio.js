import React from 'react';
import { connect } from 'react-redux';

const UserBio = ({ bio }) => {
    return (
        <p>bio : {(bio) ? bio : ' - '}</p>
    )
};

const mapStateToProps = (state) => ({
    bio: state.user.data.bio
});

export default connect (mapStateToProps)(UserBio);