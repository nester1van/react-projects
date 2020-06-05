import React from 'react';
import { connect } from 'react-redux';

import Badge from 'react-bootstrap/Badge';
import './getUser.css';

const StatusGetUser = ({ isFetching, status, errorMessage }) => {
    const fetchingProcess = () => {
        if (isFetching) {
            return <Badge variant="warning"> loading...</Badge>
        } else if (status === 'success') {
            return <Badge variant="success"> success</Badge>
        } else if (errorMessage === 'Not Found') {
            return <Badge variant="danger" className="longBadge"> user login isn't valid</Badge>
        } else {
            return <> server error</>
        }
    }
    return (
        <div className="statusGetUser">
            {fetchingProcess()}
        </div>
    )
};

const mapStateToProps = (state) => ({
    isFetching: state.user.isFetching,
    status: state.user.status,
    errorMessage: state.user.errorMessage
});

export default connect(mapStateToProps)(StatusGetUser);