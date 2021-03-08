import {connect} from 'react-redux';
import allTodos from '../../reducers/selectors';
import TodoList from './todo_list';
import {createTodo, fetchTodos, receiveTodo, removeTodo} from '../../actions/todo_actions';
import { receiveErrors } from '../../actions/error_actions';

const mapStateToProps = (state) => {
    return {
     todos: allTodos(state),
     errors: receiveErrors()
    }
   
}

const mapDispatchToProps = (dispatch) => {
    return {
        receiveTodo: (todo) => {
            return dispatch(receiveTodo(todo))
        },
        removeTodo: (todo) => {
            return dispatch(removeTodo(todo))
        },
        fetchTodos: () => {
            return dispatch(fetchTodos())
        },
        createTodo: (todo) => {
            return dispatch(createTodo(todo))
        },
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(TodoList);