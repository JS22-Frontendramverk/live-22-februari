import './App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import ViewTodos from './components/ViewTodos/ViewTodos';
import AddTodo from './components/AddTodo/AddTodo';

import { addTodoList } from './actions/todoAction';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function getTodos() {
      const response = await fetch('https://dummyjson.com/todos');
      const data = await response.json();

      dispatch(addTodoList(data.todos));
    }

    getTodos();
  }, []);

  return (
    <div className="App">
      <ViewTodos />
      <AddTodo  />
    </div>
  )
}

export default App
