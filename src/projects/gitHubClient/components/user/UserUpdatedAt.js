import React from 'react';
import { connect } from 'react-redux';
import formatDate from '../../js/formatDate';

const UserUpdatedAt = ({ updatedAt }) => {
    const date = new Date(updatedAt);

    return (
        <p><strong>updated at: </strong>{formatDate(date)}</p>
    )
};

const mapStateToProps = (state) => ({
    updatedAt: state.user.data.updated_at
});

export default connect(mapStateToProps)(UserUpdatedAt);