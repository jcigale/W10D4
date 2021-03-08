import {RECEIVE_ERRORS, CLEAR_ERRORS} from '../actions/error_actions';

export const errorReducer = (state=[]) => {
    // Array.freeze(state)
    console.log(state);
    switch (action.type) {
        case RECEIVE_ERRORS:
            return action.errors;
        case CLEAR_ERRORS:
            return [];
        default:
            return state;
    }
}