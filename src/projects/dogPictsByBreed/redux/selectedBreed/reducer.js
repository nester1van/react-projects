import { SELECT_BREED } from './action';

const initialSelectedBreed = {
    breed: 'bulldog',
    subbreed: 'english'
};

const selectedBreed = (state = initialSelectedBreed, action) => {
    switch (action.type) {
        case SELECT_BREED:
            return action.selectedBreed;
        default:
            return state;
    };
};

export default selectedBreed;