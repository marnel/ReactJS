import React from 'react'
import { observer } from 'mobx-react'

class TodoItemView extends React.Component {
  render(){
    const store = this.props.todo

    return (
      <li className="todo-item">
        <input type="checkbox"
          className="todoCheckbox" onChange={e => { store.completed = !store.completed }}/>
        <span style={{textDecoration: store.completed ? 'line-through' : 'none' }}>{store.value}</span>
      </li>
    )
  }
}

export default observer(TodoItemView)
