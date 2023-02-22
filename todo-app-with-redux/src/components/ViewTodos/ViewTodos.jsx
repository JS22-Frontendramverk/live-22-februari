import { useSelector } from "react-redux";

import TodoItem from "../TodoItem/TodoItem";

function ViewTodos() {
    const todos = useSelector((state) => { return state.todos });

    const todosComponents = todos.map((todo) => {
        return <TodoItem task={ todo.todo } done={ todo.completed } key={ todo.id } />
    });

    return (
        <ul className="todos">
            { todosComponents.length > 0 ? todosComponents : <h2>Inga todos</h2> }
        </ul>
    )
}

export default ViewTodos;