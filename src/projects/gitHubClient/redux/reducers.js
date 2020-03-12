import { combineReducers } from 'redux';
import user from './user/reducer';
import followers from './followers/reducer';

const reducers = combineReducers({
    user,
    followers
});

export default reducers;