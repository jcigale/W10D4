import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';
//import receiveTodo from '../../actions/todo_actions';

const TodoList = (props) => {
    return(
    <div>
        <TodoForm receiveTodo={props.receiveTodo}/>
        <h3>Todo List</h3>
        <ul>
            {props.todos.map((todo) => {
                //return (<li key={todo.id}>{todo.title}: {todo.body}</li>)
                return (
                    <TodoListItem todo={todo} key={todo.id} />
                )
            })}
        </ul>
    </div>
    );
}

export default TodoList;
