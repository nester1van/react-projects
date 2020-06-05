import React from 'react';
import { connect } from 'react-redux';
import Badge from 'react-bootstrap/Badge';

const FetchingProcess = ({isFetching, status}) => {
    const fetchingProcess = () => {
        if (isFetching) {
            return <Badge variant="warning">loading...</Badge>
        } else if (status === 'success') {
            return <Badge variant="success">success</Badge>
        } else {
            return <Badge varinat="danger">error</Badge>
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