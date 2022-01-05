import React from 'react';
import './ToDo.css';

const ToDo = ({ToDo}) => {
    const toDo = ToDo;
    return (
        <div className="todo-card">
            <p> ID: { (toDo) ? toDo.id : '*' } </p>
            <p>
                { (toDo) ? toDo.description : 'description'  }
            </p>
            <p> { (toDo.completed) ? 'hecha' : 'por hacer' } </p>
            
        </div>
    );
}

export default ToDo;
