import { REQ_REPOS, RES_REPOS, ERR_REPOS } from './actions';
import { initialData } from './initialData';

const initialRepos = {
    data: initialData,
    status: 'success',
    isFetching: false
};

const repos = (state = initialRepos, action) => {
    const { type, status, data, isFetching } = action;
    switch (type) {
        case REQ_REPOS: 
            return {...state, isFetching};
        case RES_REPOS:
            return {status, data, isFetching};
        case ERR_REPOS:
            return {...state, status, isFetching};
        default:
            return state;
    }
};

export default repos;