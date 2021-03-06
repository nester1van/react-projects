import React from 'react';
import { connect } from 'react-redux';

const UserLocation = ({ location }) => {
    return (
        <p><strong>location: </strong>{location ? location : ' - '}</p>
    )
};

const mapStateToProps = (state) => ({
    location: state.user.data.location
});

export default connect(mapStateToProps)(UserLocation);