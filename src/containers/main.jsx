import React, { useState } from 'react';
import ToDo from '../components/ToDo';
import { connect } from 'react-redux';
import actions from '../store/actions/index'
import ToDoAdder from '../components/ToDoAdder';
import ToDoEditer from '../components/ToDoEditer';
import './Main.css';

const Main = (props) => {

    const ToDos = props.state.todos;
    const [currentTodo, setCurrentTodo] = useState({}) 

    const handleRemoveToDos = todo => () => {
      props.removeToDo(todo);
    };

    const handleAddToDos = todo => () => {
      props.addToDo(todo);
    }

    const handleEditTodos = todo => () => {
      props.editToDo(todo)
    }

    const getCurrentTodo = (todo) => {
      setCurrentTodo(todo)
    }

    return (
        <div className='main'>

            {
              ToDos.map(todo => {
                return (
                  <div className='todo-container' key={todo.id}>
                    <ToDo
                      ToDo={todo}
                      removeToDo={handleRemoveToDos}
                    />
                    <button className='edit-button' onClick={ () => getCurrentTodo(todo) } >
                      <i class="fas fa-edit"></i>
                    </button>
                    <button className='remove-button' onClick={handleRemoveToDos(todo)}>
                      <i class="fas fa-trash-alt"></i>
                    </button>
                  </div>
                )
              })
            }
            <ToDoAdder addToDo={handleAddToDos}/>
            <ToDoEditer ToDo={currentTodo} editToDo={handleEditTodos} />
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
      state: state
    };
  };
  
  const mapDispatchToProps = {
    addToDo: actions.addToDo,
    editToDo: actions.editToDo,
    removeToDo: actions.removeToDo
  };

export default connect(mapStateToProps, mapDispatchToProps)(Main);
