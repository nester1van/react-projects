import { REQ_USER, RES_USER, ERR_USER} from './actions';
import { initialData } from './initialData';

const initialUser = {
    data: initialData,
    status: 'success',
    isFetching: false,
    errorMessage: ''
    };

const user = (state = initialUser, action) => {
    const { type, data, status, isFetching, errorMessage } = action;
    switch (type) {
        case REQ_USER:
            return {...state, isFetching};
        case RES_USER:
            return {...state, data, status, isFetching};
        case ERR_USER:
            return {...state, status, isFetching, errorMessage};
        default: 
            return state;
    }
};

export default user;