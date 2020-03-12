import React from 'react';
import { connect } from 'react-redux';

const UserCreatedAt = ({ createdAt }) => {
    const date = new Date(createdAt);
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
        <p>created at : {formatDate()}</p>
    )
};

const mapStateToProps = (state) => ({
    createdAt: state.user.data.created_at
})

export default connect(mapStateToProps)(UserCreatedAt);