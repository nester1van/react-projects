import { SET_NUM_PICTS } from './action';

const initialState = 1;

const numPicts = (state = initialState, action) => {
    switch (action.type) {
        case SET_NUM_PICTS:
            return action.numPicts;
        default:
            return state;
    };
};

export default numPicts;