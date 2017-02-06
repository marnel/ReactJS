import { toggleChecked, findTodoById, updateTodo } from '../lib/todoHelpers'

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
    case "TODO-TOGGLED":
      var t = toggleChecked(findTodoById(action.payload, state.todos))
      const updatedTodos = updateTodo(state.todos, t)
      return {
        todos: updatedTodos
      }
    default:
      return state
  }
}
