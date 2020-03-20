import { REQ_FOLLOWINGS, RES_FOLLOWINGS, ERR_FOLLOWINGS } from './actions';
import { initialData } from './initialData';


const initialFollowings = {
    data: initialData,
    status: 'success',
    isFetching: false
};

const followings = (state = initialFollowings, action) => {
    const { type, status, data, isFetching } = action;
    switch (type) {
        case REQ_FOLLOWINGS:
            return {...state, isFetching};
        case RES_FOLLOWINGS:
            return {status, data, isFetching};
        case ERR_FOLLOWINGS:
            return {...state, status, isFetching};
        default:
            return state;
    }
};

export default followings;