import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
import App from '../acirs/App';
import Side from '../acirs/Side';
import User from '../acirs/User';

export default (history) => combineReducers({
    router: connectRouter(history),
    App: App.reducer,
    Side: Side.reducer,
    User: User.reducer,
});
