import fetch from "cross-fetch";

// action types
export const REQ_USER = 'REQ_USER';
export const RES_USER = 'RES_USER';
export const ERR_USER = 'ERR_USER';

// action creators
const reqUser = () => ({
    type: REQ_USER,
    isFetching: true
});

const resUser = (data) => ({
    type: RES_USER,
    data,
    status: 'success',
    isFetching: false
});

const errUser = (errorMessage) => ({
    type: ERR_USER,
    status: 'failure',
    isFetching: false,
    errorMessage
});

// url creator 
const userURL = (userLogin) => {
    return `https://api.github.com/users/${userLogin}`;
};

// async action creator
export const getUser = (userLogin) => (dispatch) => {
    dispatch(reqUser());
    fetch(userURL(userLogin))
        .then(res => res.json())
        .then(json => {
            if (json.message) {
                dispatch(errUser(json.message));
            } else {
                dispatch(resUser(json));
            }
        })
}