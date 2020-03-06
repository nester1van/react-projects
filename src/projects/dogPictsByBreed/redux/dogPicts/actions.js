import fetch from 'cross-fetch';

// action type
export const REQ_DOG_PICTS = 'REQ_DOG_PICTS';
export const RES_DOG_PICTS = 'RES_DOG_PICTS';
export const ERR_DOG_PICTS = 'ERR_DOG_PICTS';

// action creator
const reqDogPicts = () => ({
    type: REQ_DOG_PICTS,
    isFetching: true
});
const resDogPicts = ({ urlPicts, status }) => ({
    type: RES_DOG_PICTS,
    urlPicts,
    status,
    isFetching: false
});
const errDogPicts = ({ status }) => ({
    type: ERR_DOG_PICTS,
    status,
    isFetching: false
});

// transform JSON { message, status } to { urlPicts, status }
const transformJSON =  ({message, status }) => ({ urlPicts: message, status });

// URL creator
const urlDogPicts = ({ selectedBreed, numPicts }) => {
    const { breed, subbreed } = selectedBreed;
    if (breed.trim().length === 0) {
        return `https://dog.ceo/api/breeds/image/random/${numPicts}`;
    } else if (subbreed.trim().length === 0) {
        return `https://dog.ceo/api/breed/${breed}/images/random/${numPicts}`;
    } else {
        return `https://dog.ceo/api/breed/${breed}/${subbreed}/images/random/${numPicts}`;
    }

};

// async action creator

export const getDogPicts = () => (dispatch, getState) => {
    const { selectedBreed, numPicts } = getState();
    dispatch(reqDogPicts());
    return fetch(urlDogPicts({selectedBreed, numPicts}))
    .then(res => res.json())
    .then (json => {
        const { message, status } = json;
        if (status === 'success') {
            dispatch(resDogPicts(transformJSON({message, status})));
        } else {
            dispatch(errDogPicts({ status }));
        }
    });
};