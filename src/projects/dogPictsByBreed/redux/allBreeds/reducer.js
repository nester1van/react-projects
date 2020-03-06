import { REQ_ALL_BREEDS, 
         RES_ALL_BREEDS, 
         ERR_ALL_BREEDS } from './actions';

const initialAllBreeds = {
    breeds: [{
        breed: 'bulldog',
        subbreed: 'english'
    }],
    status: 'success',
    isFetching: true
};

const allBreeds = (state = initialAllBreeds, action) => {
    const {type, breeds, status, isFetching} = action;
    switch (type) {
        case REQ_ALL_BREEDS:
            return {...state, isFetching};
        case RES_ALL_BREEDS:
            return {breeds, status, isFetching};
        case ERR_ALL_BREEDS:
            return {...state, status, isFetching};
        default: 
            return state;
    };
};

export default allBreeds;