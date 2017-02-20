import { extendObservable } from 'mobx'

class TodoItem {
  constructor(value='', completed=false) {
    extendObservable(this, {
      value: value,
      completed: completed,
      id: Date.now()
    })
  }

  serialize(){
    return {
      id: this.id,
      value: this.value,
      completed: this.completed
    }
  }

  static deserialize(json: Object){
    const todo = new TodoItem()
    todo.id = json['id'] || Date.now()
    todo.value = json['value'] || ''
    todo.completed = json['completed'] || false
    return todo
  }
}

export default TodoItem
