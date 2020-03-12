// import { getUser } from './user/actions';
// import { getFollowers } from './followers/actions';

const debugStore = (store, isDebugging) => {
    store.subscribe(() => console.log(store.getState()));
    // store.dispatch(getUser('nester1van'));
    // store.dispatch(getFollowers('nester1van'));
};

export default debugStore;