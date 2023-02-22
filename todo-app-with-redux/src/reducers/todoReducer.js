const initialState = {
    todos: []
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO_LIST':
            return {
                ...state,
                todos: action.payload // Payload här hela todo-arrayen som kommer från API-anropet i App
            }
        case 'ADD_NEW_TODO':
            // const todoArrayCopy =  [...state.todos];
            // todoArrayCopy.push(action.payload);

            // return {
            //     ...state,
            //     todos: todoArrayCopy
            // }

            // Ovan kod gör samma som nedan

            return {
                ...state,
                todos: [
                    ...state.todos, 
                    { id: state.todos.length, todo: action.payload, completed: false }
                ]
            }
        default:
            return state;    
    }
}

export default todoReducer;