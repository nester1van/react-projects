import React from 'react';
import { connect } from 'react-redux';


const StatusGetUser = ({ isFetching, status, errorMessage }) => {
    const fetchingProcess = () => {
        if (isFetching) {
            return <> loading...</>
        } else if (status === 'success') {
            return <> success</>
        } else if (errorMessage === 'Not Found') {
            return <> user login isn't valid</>
        } else {
            return <> server error</>
        }
    }
    return (
        <>
            {fetchingProcess()}
        </>
    )
};

const mapStateToProps = (state) => ({
    isFetching: state.user.isFetching,
    status: state.user.status,
    errorMessage: state.user.errorMessage
});

export default connect(mapStateToProps)(StatusGetUser);