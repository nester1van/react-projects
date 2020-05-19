import React from 'react';
import { connect } from 'react-redux';

const UserHireable = ({ hireable }) => {
    return (
        <p><strong>hireable: </strong>{hireable ? hireable : ' - '}</p>
    )
};

const mapStateToProps = (state) => ({
    hireable: state.user.data.hireable
});

export default connect(mapStateToProps)(UserHireable);