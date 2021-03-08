
const allTodos = (state) => {
    const todos = Object.values(state.todos);
    return todos;
}

window.allTodos = allTodos

export default allTodos;