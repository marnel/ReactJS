export const todoReducer = (state={todos: [], textValue: ''}, action) => {
  switch (action.type) {
    case "ADD-TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
        textValue: ''
      }
    case "TODO-TEXT-CHANGED":
      return {
        ...state,
        textValue: action.payload
      }
    default:
      return state;
  }
}
