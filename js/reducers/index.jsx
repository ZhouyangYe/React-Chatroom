import {combineReducers} from 'redux';
import UserReducer from './reducer-users';
import MessageReducer from './reducer-message';

const allReducers = combineReducers({
    users: UserReducer,
    message: MessageReducer
});

export default allReducers;