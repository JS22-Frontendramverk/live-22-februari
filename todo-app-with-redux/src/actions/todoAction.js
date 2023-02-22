const addTodoList = (todos) => {
    return {
        type: 'ADD_TODO_LIST',
        payload: todos
    }
}

const addNewTodo = (todo) => {
    return {
        type: 'ADD_NEW_TODO',
        payload: todo
    }
}

export { addTodoList, addNewTodo }