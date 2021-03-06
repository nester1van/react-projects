// import { getUser } from './user/actions';
// import { getFollowers } from './followers/actions';
// import { getFollowings } from './followings/actions';
// import { getRepos } from './repos/actions';

const debugStore = (store, isDebugging) => {
    store.subscribe(() => console.log(store.getState()));
    // store.dispatch(getUser('nester1van'));
    // store.dispatch(getFollowers('nester1van'));
    // store.dispatch(getFollowings('nester1van'));
    // store.dispatch(getRepos('nester1van'));
};

export default debugStore;