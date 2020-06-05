import React from 'react';
import Button from 'react-bootstrap/Button';
import './pagination.css';

const Pagination = ({ min, max, value, onChange }) => {
    
    const handleClickLess = () => {
        if (value > max) {
            onChange(max);
        } else if (value > min) {
            onChange(value - 1);
        } else {
            onChange(min);
        }
    } 
    const handleClickGreater = () => {
        if (value < min) {
            onChange(min);
        }   else if (value < max) {
            onChange(value + 1);
        } else {
            onChange(max);
        }
    }

    return (
        <>
            <Button onClick={handleClickLess} variant="dark" className={(value <= min) ? 'hidden' : ''}>{'<'}</Button>
            <Button disabled  variant="dark" className='disabled'>{value}</Button>
            <Button onClick={handleClickGreater}  variant="dark" className={(value >= max) ? 'hidden' : ''}>{'>'}</Button>
        </>
    )
};

export default Pagination;