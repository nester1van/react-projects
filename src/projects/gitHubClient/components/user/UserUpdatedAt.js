import React from 'react';
import { connect } from 'react-redux';

const UserUpdatedAt = ({ updatedAt }) => {
    const date = new Date(updatedAt);
    const formatDate = () => {
        const day = date.getDate();
        const months = ['January', 'February', 'March', 'April', 
            'May','June', 'July', 'August', 
            'September', 'October', 'November', 'December'];
        const month = months[date.getMonth()];
        const year = date.getFullYear();
        return `${day} ${month} ${year}`
    }
    return (
        <p>updated at : {formatDate()}</p>
    )
};

const mapStateToProps = (state) => ({
    updatedAt: state.user.data.updated_at
});

export default connect(mapStateToProps)(UserUpdatedAt);