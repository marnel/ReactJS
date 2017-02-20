import { extendObservable, action, computed } from 'mobx'
import TodoItem from './TodoItem'

class Todos {
  constructor() {
    extendObservable(this, {
      todos: [],
      textVal: '',
      selectedID: '',
      addNewTask: this.addTask,
      deleteTodo: this.deleteTodoAction,
      isTodoValid: this.isTodoValid
    })
    this.loadTodosFromLocalStorage()
  }

  addTask = action(() => {
    this.todos.push(new TodoItem(this.textVal))
    this.saveTodosToLocalStorage()
    this.textVal = ''
  })

  deleteTodoAction = action(() => {
    const idx = this.todos.findIndex(item => item.id === this.selectedID);
    this.todos.splice(idx,1)
    this.saveTodosToLocalStorage()
  })

  isTodoValid = computed(() => {
    return this.textVal.trim().length > 0 ? false : true
  })

  loadTodosFromLocalStorage = action(() => {
    if (window.localStorage){
      const localTodos = JSON.parse(window.localStorage.getItem("todos") || "[]")
      this.todos = localTodos.map(todo => TodoItem.deserialize(todo))
    }
  })

  saveTodosToLocalStorage(){
    if (window.localStorage){
      window.localStorage.setItem("todos",
      JSON.stringify(this.todos.map(todo => todo.serialize())))
    }
  }

}

export default Todos
