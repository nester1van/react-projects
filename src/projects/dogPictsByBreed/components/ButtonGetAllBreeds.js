import React from 'react';
import { connect } from 'react-redux';
import { getAllBreeds } from '../redux/allBreeds/actions';

const ButtonGetAllBreeds = ({ getAllBreeds }) => {
    return (
        <button onClick={() => getAllBreeds()}>
            get all breeds
        </button>
    );
};

export default connect(null, {getAllBreeds})(ButtonGetAllBreeds);