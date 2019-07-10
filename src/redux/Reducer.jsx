import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
import Side from '../acirs/Side';
import User from '../acirs/User';

export default (history) => combineReducers({
    router: connectRouter(history),
    Side: Side.reducer,
    User: User.reducer,
});
