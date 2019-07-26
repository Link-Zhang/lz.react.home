import {communityConstants} from '../redux/ActionTypes';

// Action Creator
export const communityDataDoneActionCreator = (data) => {
    return {
        type: communityConstants.DATA_DONE,
        data: data,
    };
};

// Init state
const initState = {
    data: [{}],
};

// Reducer
const reducer = (state = initState, action = {}) => {
    switch (action.type) {
        case communityConstants.DATA_DONE:
            return {
                ...state,
                data: action.data,
            };
        default:
            return state;
    }
};

export default {initState, reducer};

