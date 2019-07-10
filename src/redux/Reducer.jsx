import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
import App from '../aircs/App';
import Sidebar from '../aircs/Siderbar';
import User from '../aircs/User';

export default (history) => combineReducers({
    router: connectRouter(history),
    App: App.reducer,
    Sidebar: Sidebar.reducer,
    User: User.reducer,
});
