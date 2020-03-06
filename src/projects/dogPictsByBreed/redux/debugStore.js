// import { setNumPicts } from '../redux/numPicts/action';
// import { selectBreed } from '../redux/selectedBreed/action';
// import { getAllBreeds } from '../redux/allBreeds/actions';
// import { getDogPicts } from '../redux/dogPicts/actions';

const debugStore = (store, isDebugging) => {
    store.subscribe(() => console.log(store.getState()));
    // store.dispatch(setNumPicts(2));
    // store.dispatch(selectBreed({breed: 'buhund', subbreed: 'norwegian'}));
    // store.dispatch(getAllBreeds());
    // store.dispatch(getDogPicts());
};

export default debugStore;