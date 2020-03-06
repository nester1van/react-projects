import React from 'react';
import { connect } from 'react-redux';

import { selectBreed } from '../redux/selectedBreed/action';
import { getDogPicts } from '../redux/dogPicts/actions';

const SelectorBreed = ({ allBreeds, 
                         selectedBreed, 
                         selectBreed, 
                         getDogPicts }) => {
    const { breeds } = allBreeds;

    const handleChange = (e) => {
        const [ breed, subbreed ] = e.target.value.split(',');
        selectBreed({breed, subbreed});
        getDogPicts();
    };

    return (
        <>
            <select onChange={handleChange}>
                {breeds.map(objBreed => {
                    const label = objBreed.breed + ' ' + objBreed.subbreed;
                    const value = objBreed.breed + ',' + objBreed.subbreed;
                    const fnSelected = () => 
                        ( objBreed.breed === selectedBreed.breed 
                        && objBreed.subbreed === selectedBreed.subbreed );
                    
                    return <option 
                            key={label} label={label} value={value}
                            selected={fnSelected()}/> 
                })}
            </select>
        </>
    );
};

const mapStateToProps = (state) => ({
    allBreeds: state.allBreeds,
    selectedBreed: state.selectedBreed
});

export default connect(
    mapStateToProps,
    {selectBreed, getDogPicts})(SelectorBreed);