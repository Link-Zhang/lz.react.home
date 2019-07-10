export const action = {
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',
};

const initState = {
    login: false,
    username: '未登录',
};

const reducer = (state = initState, action = {}) => {
    switch (action.type) {
        case  action.LOGIN_SUCCESS:
            return {
                ...state,
                login: true,
                username: action.payload
            };
        case action.LOGOUT_SUCCESS:
            return {
                ...state,
                login: false,
                username: initState.username
            };
        default:
            return state;
    }
};

export default {initState, reducer};

export const loginSuccessActionCreator = (userName) => {
    return {type: action.LOGIN_SUCCESS, payload: userName};
};

export const logoutSuccessActionCreator = () => {
    return {type: action.LOGOUT_SUCCESS};
};
