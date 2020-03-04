import { SEND_REQUEST, RECEIVE_RESPONSE, RECEIVE_ERROR} from './actions';
import defaultpict from '../img/defaultpict.png';

const initialState = {
    isFetching: false,
    urlPict: defaultpict,
    status: 'success'
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_REQUEST: 
            return {...state, isFetching: true};
        case RECEIVE_RESPONSE:
            return {isFetching: false, urlPict: action.urlPict, status: action.status};
        case RECEIVE_ERROR:
            return {...state, isFetching: false, status: action.status};
        default:
            return state;
    }
}

export default reducer;