import React, { useState, useEffect } from 'react';
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
            <button onClick={handleClickLess} className={(value <= min) ? 'hidden' : ''}>{'<'}</button>
            <button disabled className='disabled'>{value}</button>
            <button onClick={handleClickGreater} className={(value >= max) ? 'hidden' : ''}>{'>'}</button>
        </>
    )
};

export default Pagination;