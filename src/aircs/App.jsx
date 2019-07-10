export const action = {
    APP_ON_LOAD: 'APP_ON_LOAD',
    APP_ON_DIRECT: 'APP_ON_DIRECT',

};

const initState = {
    name: 'Home',
    token: null,
    viewChangeCounter: 0,
    username: '未登录',
};

const reducer = (state = initState, action = {}) => {
    switch (action.type) {
        case action.APP_ON_LOAD:
            return {
                ...state,
                token: action.token || initState.token,
                loaded: true,
                username: action.payload ? action.payload.username : initState.username
            };
        case action.APP_ON_DIRECT:
            return {
                ...state, redirect: initState.redirect
            };
        default:
            return state;
    }
};

export default {initState, reducer};

export const appOnLoadActionCreator = (payload, token) => {
    return {
        type: action.APP_ON_LOAD,
        payload,
        token,
        skipTracking: true
    };
};

export const appOnDirectActionCreator = () => {
    return {
        type: action.APP_ON_DIRECT
    }
};
