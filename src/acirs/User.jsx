import {userConstants} from "../redux/ActionTypes";

// Action Creator
export const loginSuccessActionCreator = (username) => {
    return {type: userConstants.LOGIN_SUCCESS, payload: username};
};

export const logoutSuccessActionCreator = () => {
    return {type: userConstants.LOGOUT_SUCCESS};
};

// Init state
const initState = {
    authorization: false,
    username: null,
};

// Reducer
const reducer = (state = initState, action = {}) => {
    switch (action.type) {
        case  userConstants.LOGIN_SUCCESS:
            return {
                ...state,
                authorization: true,
                username: action.payload
            };
        case userConstants.LOGOUT_SUCCESS:
            return {
                ...state,
                authorization: false,
                username: initState.username
            };
        default:
            return state;
    }
};

export default {initState, reducer};
