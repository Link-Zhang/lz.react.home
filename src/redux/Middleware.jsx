import {userConstants} from './ActionTypes';

export const localStorageMiddleware = store => next => action => {
    if (action.type === userConstants.LOGIN_SUCCESS) {
        window.localStorage.setItem('jwt', action.payload.username);
    } else if (action.type === userConstants.LOGOUT_SUCCESS) {
        window.localStorage.setItem('jwt', '');
    }
    next(action);
};

// todo: Fix promiseMiddleware
