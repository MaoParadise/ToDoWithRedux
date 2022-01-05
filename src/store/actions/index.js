const addToDo = (payload) => ({ type: 'ADD_TO_DO', payload });
  
const removeToDo = (payload) => ({ type: 'REMOVE_TO_DO', payload });

const editToDo = (payload) => ({ type: 'EDIT_TO_DO', payload });
  
  const actions = {
    addToDo,
    removeToDo,
    editToDo
  };
  
  export default actions;
  