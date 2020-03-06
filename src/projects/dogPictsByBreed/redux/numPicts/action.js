// action type
export const SET_NUM_PICTS = 'SET_NUM_PICTS';

//action creator
export const setNumPicts = (numPicts) => ({
    type: SET_NUM_PICTS,
    numPicts
});