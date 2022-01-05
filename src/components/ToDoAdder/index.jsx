import React, {useRef, useState} from 'react';
import './ToDoAdder.css';

const ToDoAdder = ({addToDo}) => {

    let adderElement = useRef();
    let [description, setDescription ] = useState('');

    const handleAddToDo = () => {
        setDescription(adderElement.current.value);
    }

    return (
        <div className='todoAdder'>
            <h1> To Do adder </h1>    
            <input type="text" name="" id="" ref={adderElement} onChange={() => handleAddToDo()}/>
            <button onClick={addToDo({ description: description})}> Agregar </button>
        </div>
    );
}

export default ToDoAdder;
