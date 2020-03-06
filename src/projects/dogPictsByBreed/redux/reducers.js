import { combineReducers } from 'redux';
import numPicts from './numPicts/reducer';
import selectedBreed from './selectedBreed/reducer';
import allBreeds from './allBreeds/reducer';
import dogPicts from './dogPicts/reducer';

const reducers = combineReducers({
    numPicts,
    selectedBreed,
    allBreeds,
    dogPicts
});

export default reducers;