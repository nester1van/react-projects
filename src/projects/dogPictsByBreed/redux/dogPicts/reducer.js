import { REQ_DOG_PICTS, RES_DOG_PICTS, ERR_DOG_PICTS }from './actions';
import defaultpict from '../../img/defaultpict.png';

const initialDogPicts = {
    urlPicts: [defaultpict],
    status: 'success',
    isFetching: false
};

const dogPicts = (state = initialDogPicts, action) => {
    const { type, urlPicts, status, isFetching } = action;
    switch (type) {
        case REQ_DOG_PICTS:
            return {...state, isFetching};
        case RES_DOG_PICTS:
            return {urlPicts, status, isFetching};
        case ERR_DOG_PICTS:
            return {...state, status, isFetching};
        default:
            return state;
    };
};

export default dogPicts;