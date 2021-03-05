import {connect} from 'react-redux';
import allTodos from '../../reducers/selectors';
import TodoList from './todo_list';

const mapStateToProps = (state) => {
    return {
     todos: allTodos(state),
    }
   
}

const mapDispatchToProps = (dispatch) => {
    return {
        recieveTodo: (todo) => {
            return dispatch(recieveTodo(todo))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);