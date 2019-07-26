import {houseContants} from '../redux/ActionTypes';

// Action Creator
export const houseDataDoneActionCreator = (data) => {
    return {
        type: houseContants.DATA_DONE,
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
        case houseContants.DATA_DONE:
            return {
                ...state,
                data: action.data,
            };
        default:
            return state;
    }
};

export default {initState, reducer};

