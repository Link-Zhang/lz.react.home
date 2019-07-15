import {applyMiddleware, createStore} from 'redux';
import {createLogger} from 'redux-logger';
import {routerMiddleware} from 'connected-react-router';
import {composeWithDevTools} from 'redux-devtools-extension';
import history from './History';
import {localStorageMiddleware} from './Middleware';
import preloadedState from './PreloadedState';
import createRootReducer from './Reducer';
import globalConfig from '../config';

const historyRouterMiddleware = routerMiddleware(history);

const getMiddleware = () => {
    if (globalConfig.debug) {
        return applyMiddleware(historyRouterMiddleware, localStorageMiddleware, createLogger())
    } else {
        return applyMiddleware(historyRouterMiddleware, localStorageMiddleware);
    }
};

const enhancer = composeWithDevTools(getMiddleware());

export default createStore(
    createRootReducer(history),
    preloadedState,
    enhancer
);
