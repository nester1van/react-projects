import React from 'react';
import { connect } from 'react-redux';

const FetchingProcess = ({isFetching, status}) => {
    const fetchingProcess = () => {
        if (isFetching) {
            return <p>loading...</p>
        } else if (status === 'success') {
            return <p>success</p>
        } else {
            return <p>error</p>
        }
    }
    
    return (
        <div>{fetchingProcess()}</div>
    )
}

const mapStateToProps = (state) => ({
    isFetching: state.isFetching,
    status: state.status
})

export default connect(mapStateToProps)(FetchingProcess);