import React from 'react';
import { connect } from 'react-redux';
import { getDogPicts } from '../redux/dogPicts/actions';

const ButtonGetPicts = ({ getDogPicts }) => {
    return (
        <button onClick={getDogPicts}>
            Fetch dog picts
        </button>
    );
};

export default connect(null, {getDogPicts})(ButtonGetPicts);