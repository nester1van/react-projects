import React from 'react';
import { connect } from 'react-redux';

const UserCompany = ({ company }) => {
    return (
        <p>company : {company ? company : ' - '}</p>
    )
};

const mapStateToProps = (state) => ({
    company: state.user.data.company
});

export default connect(mapStateToProps)(UserCompany);