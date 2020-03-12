import React, { useState, useEffect } from 'react';
import './pagination.css';

const Pagination = ({ min, max, value, onChange }) => {

    const [currentValue, setCurrentValue] = useState(value);

    useEffect(() => {
        onChange(currentValue);
    }, [currentValue]);//currentValue, value
    
    const handleClickLess = () => {
        if (currentValue > max) {
            setCurrentValue(max);
        } else if (currentValue > min) {
            setCurrentValue(currentValue - 1);
        } else {
            setCurrentValue(min);
        }
    } 
    const handleClickGreater = () => {
        if (currentValue < min) {
            setCurrentValue(min);
        }   else if (currentValue < max) {
            setCurrentValue(currentValue + 1);
        } else {
            setCurrentValue(max);
        }
    }

    return (
        <>
            <button onClick={handleClickLess} className={(currentValue <= min) ? 'hidden' : ''}>{'<'}</button>
            <button>{currentValue}</button>
            <button onClick={handleClickGreater} className={(currentValue >= max) ? 'hidden' : ''}>{'>'}</button>
        </>
    )
};

export default Pagination;