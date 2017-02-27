import { observable } from 'mobx'

class TodoItem {
  constructor(value='', completed=false) {
      this.value = value
      this.completed = completed
      this.id = Date.now()
    }
  
  @observable value = ''
  @observable completed = false

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
