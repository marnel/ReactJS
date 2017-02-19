import React from 'react'
import { observer } from 'mobx-react'

class TodoItemView extends React.Component {
  render(){
    const todo = this.props.todo
    const store = this.props.store

    return (
      <li className="todo-item">
        <input type="checkbox"
          className="todoCheckbox" onChange={e => { todo.completed = !todo.completed }}/>
        <span style={{textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.value}</span>
        <span onClick={ () => {
            store.selectedID = todo.id
            store.deleteTodo()
          }
        } ><button>delete</button></span>
      </li>
    )
  }
}

export default observer(TodoItemView)

TodoItemView.propTypes = {
  store: React.PropTypes.object,
  todo: React.PropTypes.object
}
