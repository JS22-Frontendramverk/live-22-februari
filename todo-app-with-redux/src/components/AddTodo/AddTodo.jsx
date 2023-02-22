import './AddTodo.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addNewTodo } from '../../actions/todoAction';

function AddTodo() {
    const [todo, setTodo] = useState('');
    const dispatch = useDispatch();

    function handleClick() {
        dispatch(addNewTodo(todo));
    }

    return (
        <section className='add-todo'>
            <input type="text" placeholder="Ange todo"
            className='add-todo__input'
            onChange={ (event) => { setTodo(event.target.value); }} />
            <p>{ todo }</p>
            <button className='add-todo__button'
            onClick={ () => { handleClick() }}>Lägg till</button>
        </section>
    )
}

export default AddTodo;