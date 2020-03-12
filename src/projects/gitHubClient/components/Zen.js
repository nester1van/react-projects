import React, { useState, useEffect } from 'react';
import fetch from 'cross-fetch';

// Пример компонента, не зависящего от state store.

const Zen = () => {
    const [zen, setZen] = useState('');

    useEffect(() => {
        getZen();
    }, []);
        

    const getZen = () => {
        fetch('https://api.github.com/zen')
            .then(res => res.text())
            .then(text => {
                setZen(text);
            });
    }
    return (
        <>
            <p>Zen : <em>{zen}</em></p>
        </>
    )
}

export default Zen;