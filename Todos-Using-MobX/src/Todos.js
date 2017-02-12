import { extendObservable } from 'mobx'
import TodoItem from './TodoItem'

class Todos {
  constructor() {
    extendObservable(this, {
      todos: [new TodoItem('test task 1')],
      textVal: ''
    })
  }

  addNewTask(task){
    this.todos.push(task)
  }

}

export default Todos;
