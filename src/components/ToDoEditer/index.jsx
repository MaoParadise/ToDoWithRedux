import React, {useState, useRef, useEffect} from 'react';
import './ToDoEditer.css';

const ToDoEditer = ({ToDo, editToDo}) => {

    let editerElement = useRef();
    let [description, setDescription ] = useState('');

    useEffect( () => { // se puede usar useEffect para hacer request a una api 
        editerElement.current.value = ToDo.description;
    }, [ToDo.description])

    const handleEditToDo = () => {
        setDescription(editerElement.current.value);
    }

    return (
        <div className='todoEditer'>
            <h1> Todo Editer </h1>
            <input type="text" name="" id="" ref={editerElement} onChange={() => handleEditToDo()} />
            <button > {(ToDo.completed)? 'hecho' : 'no hecho' } </button>
            <button onClick={editToDo({ id: ToDo.id, description: description})} > Guardar </button>
        </div>
    );
}

export default ToDoEditer;
