import { extendObservable } from 'mobx'

class TodoItem {
  constructor(value='', completed=false) {
    extendObservable(this, {
      value: value,
      completed: completed,
      id: Date.now()
    })
  }
}

export default TodoItem
