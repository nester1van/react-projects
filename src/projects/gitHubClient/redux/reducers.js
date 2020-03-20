import { combineReducers } from 'redux';
import user from './user/reducer';
import followers from './followers/reducer';
import followings from './followings/reducer';
import repos from './repos/reducer';

const reducers = combineReducers({
    user,
    followers,
    followings,
    repos
});

export default reducers;