import React from 'react';
import { connect } from 'react-redux';
import formatDate from '../../js/formatDate';

const UserCreatedAt = ({ createdAt }) => {
    const date = new Date(createdAt);
    return (
        <p><strong>created at: </strong>{formatDate(date)}</p>
    )
};

const mapStateToProps = (state) => ({
    createdAt: state.user.data.created_at
})

export default connect(mapStateToProps)(UserCreatedAt);