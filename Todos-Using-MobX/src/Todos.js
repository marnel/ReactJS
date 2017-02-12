import { extendObservable, action } from 'mobx'
import TodoItem from './TodoItem'

class Todos {
  constructor() {
    extendObservable(this, {
      todos: [new TodoItem('test task 1')],
      textVal: '',
      addNewTask: this.addTask
    })
  }

  addTask = action(() => {
    this.todos.push(new TodoItem(this.textVal))
  })

}

export default Todos;
