import { RECEIVE_STEP, RECEIVE_STEPS, REMOVE_STEP } from '../actions/step_actions'
import todosReducer from './todos_reducer';



const stepsReducer = (state={}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_STEPS:
            const newState = Object.assign({});
            action.steps.forEach((step) => {
                newState[step.id] = step;
            })
            return newState;
        
        case RECEIVE_STEP:
            nextState[action.step.id] = action.step;
            return nextState;
        
        case REMOVE_STEP:
            delete nextState[action.step.id];
            return nextState;

        default:
            return state;
    }
}

export default stepsReducer;