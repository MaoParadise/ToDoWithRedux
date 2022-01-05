const reducer = (state, action) => {
    switch (action.type) {
      case 'ADD_TO_DO':
        return {
          ...state,
          todos: [...state.todos, {
            id: state.todos.length + 1,
            description: action.payload.description,
            creation_date: '',
            modified_date: '',
            completed: false
          }],
        };
      case 'REMOVE_TO_DO':
        return {
          ...state,
          todos: state.todos.filter(todo => todo.id !== action.payload.id),
        };
      case 'EDIT_TO_DO':
          return {
            ...state,
            todos: state.todos.map(todo => {
              if (todo.id === action.payload.id) {
                return {
                  ...todo,
                  description: action.payload.description,
                  modified_date: '',
                };
              }
              return todo;
            }),
          };
      default:
        return state;
    }
  };
  
export default reducer;

export const selectToDo = (state, id) => {
  return state.todos.find(todo => todo.id === id);
};
