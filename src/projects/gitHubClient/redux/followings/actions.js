import fetch from 'cross-fetch';

// action types
export const REQ_FOLLOWINGS = 'REQ_FOLLOWINGS';
export const RES_FOLLOWINGS = 'RES_FOLLOWINGS';
export const ERR_FOLLOWINGS = 'ERR_FOLLOWINGS';

// action creator 
const reqFollowings = () => ({
    type: REQ_FOLLOWINGS,
    isFetching: true
});

const resFollowings = (json) => ({
    type: RES_FOLLOWINGS,
    status: 'success',
    data: json,
    isFetching: false
});

const errFollowings = () => ({
    type: ERR_FOLLOWINGS,
    status: 'failure',
    isFetching: false
});

// url creator https://api.github.com/users/nester1van/following
const followingsUrl = (userLogin) => {
    return `https://api.github.com/users/${userLogin}/following`};

// async action creator
export const getFollowings = (userLogin) => (dispatch) => {
    dispatch(reqFollowings());
    return fetch(followingsUrl(userLogin))
        .then(res => res.json())
        .then(json => {
            if (json.message) {
                dispatch(errFollowings());
            } else {
                dispatch(resFollowings(json));
            }
        })
};
