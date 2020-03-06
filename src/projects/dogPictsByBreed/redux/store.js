import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from './reducers';
import debugStore from './debugStore';

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;

debugStore(store, true);