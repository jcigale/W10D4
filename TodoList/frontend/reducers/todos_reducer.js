
import {RECEIVE_TODO, RECEIVE_TODOS, REMOVE_TODO} from '../actions/todo_actions'

const initialState = {
    1: {
        id: 1,
        title: "wash car",
        body: "with soap",
        done: false
    },
    2: {
        id: 2,
        title: "wash dog",
        body: "with shampoo",
        done: true
    }
};


const todosReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_TODOS:
            const newState = {};
            action.todos.forEach((todo) => {
                newState[todo.id] = todo;
            })
            return newState;

        case RECEIVE_TODO:
            nextState[action.todo.id] = action.todo;
            return (nextState);

        case REMOVE_TODO:
            delete nextState[action.todo.id]
            return (nextState);

        default:
            return state;
    }
}

export default todosReducer;