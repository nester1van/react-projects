import React from 'react';
import { connect } from 'react-redux';

const UserType = ({ type }) => {
    return (
        <p><strong>type: </strong>{type}</p>
    )
};

const mapStateToProps = (state) => ({
    type: state.user.data.type
});

export default connect(mapStateToProps)(UserType);