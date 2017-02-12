import React from 'react'
import { observer } from 'mobx-react'

class TodoItemView extends React.Component {
  render(){
    const state = this.props.todo

    return (
      <li className="todo-item">
        <input type="checkbox"
          className="todoCheckbox" onChange={e => { state.completed = !state.completed }}/>
        <span style={{textDecoration: state.completed ? 'line-through' : 'none' }}>{state.value}</span>
      </li>
    )
  }
}

export default observer(TodoItemView)
