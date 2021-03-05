import React from 'react';

class TodoListItem extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        const { todo } = this.props;
        return(
            <div>
                <li>{todo.title}: {todo.body}</li>
            </div>
        )
    }
} 


export default TodoListItem