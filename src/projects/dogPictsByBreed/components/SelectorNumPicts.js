import React from 'react';
import { connect } from 'react-redux';
import { setNumPicts } from '../redux/numPicts/action';
import { getDogPicts } from '../redux/dogPicts/actions';

const NumPicts = ({ maxNumber, numPicts, setNumPicts, getDogPicts }) => {
    const number = [];
    for (let i = 1; i <= maxNumber; i++) number[i] = i.toString();

    const handleChange = (e) => {
        const num = e.target.value;
        setNumPicts(num);
        getDogPicts();
    };

    return (
        <>
            <select value={numPicts} onChange={handleChange}>
                {number.map(num => 
                    <option 
                        key={num} label={num} value={num} />
                )}
            </select>
        </>
    );
}

const mapStateToProps = (state) => ({
    numPicts: state.numPicts,
});

export default connect(mapStateToProps, 
                       {setNumPicts, getDogPicts})(NumPicts);