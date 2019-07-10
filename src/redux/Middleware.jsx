import {action as UserAction} from '../aircs/User';
import agent from '../agent';

export const localStorageMiddleware = store => next => action => {
    if (action.type === UserAction.LOGIN_SUCCESS) {
        if (!action.error) {
            window.localStorage.setItem('jwt', action.payload.user.token);
            agent.setToken(action.payload.user.token);
        }
    } else if (action.type === UserAction.LOGOUT_SUCCESS) {
        window.localStorage.setItem('jwt', '');
        agent.setToken(null);
    }
    next(action);
};

// todo: Fix promiseMiddleware
