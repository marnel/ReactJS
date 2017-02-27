import { observable, action, computed } from 'mobx'
import TodoItem from './TodoItem'

class Todos {

  @observable todos = []
  @observable textVal = ''
  @observable selectedID = ''

  constructor() {
    this.loadTodosFromLocalStorage()
  }

  @action addTask = () => {
    this.todos.push(new TodoItem(this.textVal))
    this.saveTodosToLocalStorage()
    this.textVal = ''
  }

  @action deleteTodoAction = () => {
    const idx = this.todos.findIndex(item => item.id === this.selectedID);
    this.todos.splice(idx,1)
    this.saveTodosToLocalStorage()
  }

  @action loadTodosFromLocalStorage = () => {
    if (window.localStorage){
      const localTodos = JSON.parse(window.localStorage.getItem("todos") || "[]")
      this.todos = localTodos.map(todo => TodoItem.deserialize(todo))
    }
  }

  @computed get isTodoValid() {
    return this.textVal.trim().length > 0 ? false : true
  }


  saveTodosToLocalStorage(){
    if (window.localStorage){
      window.localStorage.setItem("todos",
      JSON.stringify(this.todos.map(todo => todo.serialize())))
    }
  }

}

export default Todos
