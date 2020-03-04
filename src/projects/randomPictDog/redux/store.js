import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducer';
import debugStore from './debugStore';

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

debugStore(store, true);

export default store;