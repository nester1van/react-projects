import { REQ_FOLLOWERS, RES_FOLLOWERS, ERR_FOLLOWERS} from './actions';
import { initialData } from './initialData';

const initialFollowers = {
    data: initialData,
    status: 'success',
    isFetching: false
};

const followers = (state = initialFollowers, action) => {
    const { type, status, data, isFetching } = action;
    switch (type) {
        case REQ_FOLLOWERS: 
            return {...state, isFetching};
        case RES_FOLLOWERS:
            return {data, status, isFetching};
        case ERR_FOLLOWERS:
            return {...state, status, isFetching};
        default:
            return state;
    }
};

export default followers;
