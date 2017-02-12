import { extendObservable, action } from 'mobx'
import TodoItem from './TodoItem'

class Todos {
  constructor() {
    extendObservable(this, {
      todos: [new TodoItem('test task 1')],
      textVal: '',
      selectedID: '',
      addNewTask: this.addTask,
      deleteTodo: this.deleteTodoAction
    })
  }

  addTask = action(() => {
    this.todos.push(new TodoItem(this.textVal))
    this.textVal = ''
  })

  deleteTodoAction = action(() => {
    const idx = this.todos.findIndex(item => item.id === this.selectedID);
    this.todos.splice(idx,1)
  })

}

export default Todos
