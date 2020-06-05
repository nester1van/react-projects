import React from 'react';
import { connect } from 'react-redux';
import { getDogPicts } from '../redux/dogPicts/actions';
import Button from 'react-bootstrap/Button';

const ButtonGetPicts = ({ getDogPicts }) => {
    return (
        <Button variant="dark" onClick={getDogPicts}>
            Fetch dog picts
        </Button>
    );
};

export default connect(null, {getDogPicts})(ButtonGetPicts);