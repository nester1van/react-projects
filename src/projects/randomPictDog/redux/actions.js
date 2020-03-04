import fetch from 'cross-fetch';

//action types
export const SEND_REQUEST = 'SEND_REQUEST';
export const RECEIVE_RESPONSE = 'RECEIVE_RESPONSE';
export const RECEIVE_ERROR = 'RECEIVE_ERROR';

//action creators
const sendRequest = () => ({
    type: SEND_REQUEST
})

const receiveResponse = (json) => ({
    type: RECEIVE_RESPONSE,
    urlPict: json.message,
    status: json.status
})

const receiveError = (json) => ({
    type: RECEIVE_ERROR,
    status: json.status
})

const urlRandomDog = 'https://dog.ceo/api/breeds/image/random';

export const fetchRandomDog = () => (dispatch) => {
    dispatch(sendRequest());
    return fetch(urlRandomDog)
        .then(response => response.json())
        .then(json => {
            if (json.status === 'success') {
                return dispatch(receiveResponse(json));
            }   else {
                return dispatch(receiveError(json));
            }
        })
}