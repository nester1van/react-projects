import React from 'react';
import { connect } from 'react-redux';

const UserEmail = ({ email }) => {
    return (
        <p>email : {email ? email : ' - '}</p>
    )
};

const mapStateToProps = (state) => ({
    email: state.user.data.email
});

export default connect(mapStateToProps)(UserEmail);