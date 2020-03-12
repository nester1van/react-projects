import fetch from 'cross-fetch';

// action types
export const REQ_FOLLOWERS = 'REQ_FOLLOWERS';
export const RES_FOLLOWERS = 'RES_FOLLOWERS';
export const ERR_FOLLOWERS = 'ERR_FOLLOWERS';

// action creators
const reqFollowers = () => ({
    type: REQ_FOLLOWERS,
    isFetching: true
});

const resFollowers = (json) => ({
    type: RES_FOLLOWERS,
    status: 'success',
    data: json,
    isFetching: false
});

const errFollowers = () => ({
    type: ERR_FOLLOWERS,
    status: 'failure',
    isFetching: false
});

// https://api.github.com/users/nester1van/followers
const followersUrl = (userLogin) => {
    return `https://api.github.com/users/${userLogin}/followers`;
}

// async action creator
export const getFollowers = (userLogin) => (dispatch) => {
    dispatch(reqFollowers());
    return fetch(followersUrl(userLogin))
        .then(res => res.json())
        .then(json => {
            if (json.message) {
                dispatch(errFollowers());
            }   else {
                dispatch(resFollowers(json));
            }
        })
};