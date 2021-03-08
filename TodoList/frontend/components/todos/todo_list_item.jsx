import React from 'react';

class TodoListItem extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        const { todo } = this.props;
        return(
            <div>
                <p>{todo.title}: {todo.body}</p>
            </div>
        )
    }
} 


export default TodoListItem