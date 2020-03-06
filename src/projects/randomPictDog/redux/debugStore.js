// import { fetchRandomDog } from './actions';

const debugStore = (store, isDebugging ) => {
    if (isDebugging) {
        store.subscribe(() => console.log(store.getState()));
        // store.dispatch(fetchRandomDog());
    }
}

export default debugStore;