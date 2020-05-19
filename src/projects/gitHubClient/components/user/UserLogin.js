import React from 'react';
import { connect } from 'react-redux';

const UserLogin = ({ login }) => {
    return (
        <>
            <p><strong>login: </strong>{login}</p>
        </>
    )
}

const mapStateToProps = (state) => ({
    login: state.user.data.login,
})

export default connect(mapStateToProps)(UserLogin);