import React from 'react';
import { connect } from 'react-redux';
import { fetchRandomDog } from '../redux/actions';

const ButtonGetDog = ({ fetchRandomDog }) => {
    const handleClick = () =>{
        fetchRandomDog();
    }
    return (
        <button onClick={handleClick}>get dog</button>
    )
}

export default connect(null, { fetchRandomDog })(ButtonGetDog);