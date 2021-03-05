import React from 'react';
import {uniqueId} from '../../util/utils';


class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: uniqueId(),
            title: "",
            body: "",
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateBody = this.updateBody.bind(this);
        this.updateTitle = this.updateTitle.bind(this);

    }

    handleSubmit(e) {
        e.preventDefault();
        //debugger
        this.props.receiveTodo(this.state);
        //debugger
        this.state = {
            id: uniqueId(),
            title: "",
            body: "",
        }
        //debugger
    }

    updateBody(e) {
    
        this.setState({
            body: e.target.value
        })
    }

    updateTitle(e) {
    
        this.setState({
            title: e.target.value
        })
    }


    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>Make a New Todo</h1>
                <label>Title:
                    <input type='text' value={this.state.title} onChange={this.updateTitle}/>
                </label>
                <label>Body:
                    <input type='text' value={this.state.body} onChange={this.updateBody} />
                </label>
                <button type='submit'>Add Todo</button>
            </form>
        )
    }

}

export default TodoForm;