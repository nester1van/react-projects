import React from 'react';
import { connect } from 'react-redux';

const UserName = ({ name }) => {
    return (
        <p><strong>name: </strong>{name}</p>
    )
};

const mapStateToProps = (state) => ({
    name: state.user.data.name
});

export default connect(mapStateToProps)(UserName);