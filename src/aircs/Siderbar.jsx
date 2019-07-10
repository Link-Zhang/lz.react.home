export const action = {
    SIDEBAR_COLLAPSE: 'SIDEBAR_COLLAPSE'
};

const initState = {
    collapse: false,
};

const reducer = (state = initState, action = {}) => {
    switch (action.type) {
        case action.SIDEBAR_COLLAPSE:
            return {...state, collapse: !state.collapse};
        default:
            return state;
    }
};

export default {initState, reducer};

export const siderbarCollapseActionCreator = () => {
    return {type: action.SIDEBAR_COLLAPSE};
};
