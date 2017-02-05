export const findTodoById = (id, todos) => (todos.find(todo => todo.id === id));

export const toggleChecked = (todo) => ({...todo, completed: !todo.completed })

export const updateTodo = (todos, updatedTodo) => {
  const idx = todos.findIndex(item => item.id === updatedTodo.id);
  return [
    ...todos.slice(0, idx),
    updatedTodo,
    ...todos.slice(idx+1)
  ];
}

export const createTodo = (todos, todo) => [...todos, todo];
