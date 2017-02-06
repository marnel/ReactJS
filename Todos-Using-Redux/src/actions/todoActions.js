export const addNewTodo = (todo) => {
  return {
    type: "ADD-TODO",
    payload: { id: Date.now(), value: todo, completed: false }
  }
}

export const todoTextInputChanged = (text) => {
  return {
    type: "TODO-TEXT-CHANGED",
    payload: text
  }
}
