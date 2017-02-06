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

export const todoToggled = (id) => {
  console.log(id.target)
  return {
    type: "TODO-TOGGLED",
    payload: id
  }
}
