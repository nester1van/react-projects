import fetch from 'cross-fetch';

// action types
export const REQ_REPOS = 'REQ_REPOS';
export const RES_REPOS = 'RES_REPOS';
export const ERR_REPOS = 'ERR_REPOS';

//action creators
const reqRepos = () => ({
    type: REQ_REPOS,
    isFetching: true
});

const resRepos = (json) => ({
    type: RES_REPOS,
    status: 'success',
    data: json,
    isFetching: false
});

const errRepos = () => ({
    type: ERR_REPOS,
    isFetching: false
});

// url creator https://api.github.com/users/gaearon/repos
const reposUrl = (userLogin) => {
    return `https://api.github.com/users/${userLogin}/repos`
};

// async action creator
export const getRepos = (userLogin) => (dispatch) => {
    dispatch(reqRepos());
    return fetch(reposUrl(userLogin))
        .then(res => res.json())
        .then(json => {
            if (json.message) {
                dispatch(errRepos());
            } else {
                dispatch(resRepos(json));
            }
        })
};