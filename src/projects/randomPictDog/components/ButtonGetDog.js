import React from 'react';
import { connect } from 'react-redux';
import { fetchRandomDog } from '../redux/actions';
import Button from 'react-bootstrap/Button';

const ButtonGetDog = ({ fetchRandomDog }) => {
    const handleClick = () =>{
        fetchRandomDog();
    }
    return (
        <Button variant="dark" onClick={handleClick}>get dog</Button>
    )
}

export default connect(null, { fetchRandomDog })(ButtonGetDog);