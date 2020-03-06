import fetch from 'cross-fetch';

// action types
export const REQ_ALL_BREEDS = 'REQ_ALL_BREEDS';
export const RES_ALL_BREEDS = 'RES_ALL_BREEDS';
export const ERR_ALL_BREEDS = 'ERR_ALL_BREEDS';

// action creators
const reqAllBreeds = () => ({
    type: REQ_ALL_BREEDS,
    isFetching: true
});

const resAllBreeds = ({ breeds, status }) => ({
    type: RES_ALL_BREEDS,
    breeds,
    status,
    isFetching: false
});

const errAllBreeds = ({ status }) => ({
    type: ERR_ALL_BREEDS,
    status,
    isFetching: false
});

// transform JSON { message, status } to { breeds, status }
const transformJSON = ({ message, status }) => {
    const keysMessage = Object.keys(message);
    const breeds = [];
    for (let i = 0; i < keysMessage.length; i++) {
        const subbreeds = message[keysMessage[i]];
        if (subbreeds.length === 0) {
            breeds.push({
                breed: keysMessage[i],
                subbreed: ''
            });
            continue;
        }
        for(let j = 0; j < subbreeds.length; j++) {
            breeds.push({
                breed: keysMessage[i],
                subbreed: subbreeds[j]
            });
        }
    }
    return {
        breeds,
        status
    }
};

// url creator
const urlAllBreeds = () => 'https://dog.ceo/api/breeds/list/all';

// async action creator
export const getAllBreeds = () => (dispatch) => {
    dispatch(reqAllBreeds());
    return fetch(urlAllBreeds())
        .then(res => res.json())
        .then(json => {
            if (json.status === 'success') {
                dispatch(resAllBreeds(transformJSON(json)));
            } else {
                dispatch(errAllBreeds(json));
            }
        });
};