import React from 'react'
import TodoListItem from './todo_list_item'

const TodoList = ({ todos }) => {
    return(
    <div>
        <h3>Todo List</h3>
        {console.log(todos)}
        <ul>
            {todos.map((todo) => {
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
