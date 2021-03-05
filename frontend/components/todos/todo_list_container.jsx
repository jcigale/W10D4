import {connect} from 'react-redux';
import allTodos from '../../reducers/selectors';
import TodoList from './todo_list';
import {receiveTodo, removeTodo} from '../../actions/todo_actions';

const mapStateToProps = (state) => {
    return {
     todos: allTodos(state),
    }
   
}

const mapDispatchToProps = (dispatch) => {
    return {
        receiveTodo: (todo) => {
            return dispatch(receiveTodo(todo))
        },
        removeTodo: (todo) => {
            return dispatch(removeTodo(todo))
        }

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(TodoList);