import {combineReducers} from 'redux';
import App from '../acirs/App';
import Dashboard from '../acirs/Dashboard';
import Side from '../acirs/Side';
import User from '../acirs/User';

export default (history) => combineReducers({
    App: App.reducer,
    Dashboard: Dashboard.reducer,
    Side: Side.reducer,
    User: User.reducer,
});
