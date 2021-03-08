import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';
//import {handleRemoveTodo, handleReceiveTodo} from '../../util/utils';

class TodoList extends React.Component{

    constructor(props){
        super(props);
        // this.handleRemoveTodo = this.handleRemoveTodo.bind(this);
        // this.handleReceiveTodo = this.handleReceiveTodo.bind(this);
    }

    // handleRemoveTodo(todo) {
    //     //e.preventDefault();
    //     this.props.removeTodo(todo);
    //     //debugger
    // }

    // handleReceiveTodo(todo) {
    //     //e.preventDefault();
    //     this.props.receiveTodo(todo);
    // }

    componentDidMount() {
        this.props.fetchTodos()
    }
    
    
    render() {
        return (
            <div>
                <TodoForm receiveTodo={this.props.receiveTodo} createTodo={this.props.createTodo} receiveErrors={this.props.receiveErrors}/>
                <h3>Todo List</h3>
                <ul>
                    {this.props.todos.map((todo) => {
                        return (
                            <li key={todo.id} >
                                <TodoListItem todo={todo}  receiveTodo={this.props.receiveTodo} />
                                {/* <button onClick={this.handleRemoveTodo(todo)}>Remove</button>
                                <button onClick={this.handleReceiveTodo(todo)}>Done</button> */}
                            </li>
                        )
                    })}
                </ul>
            </div>
        );
    }
    
}

export default TodoList;
