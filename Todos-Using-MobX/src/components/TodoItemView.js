import React from 'react'
import { observer } from 'mobx-react'

class TodoItemView extends React.Component {
  render(){
    const store = this.props.todo
    const todosStore = this.props.todosStore

    return (
      <li className="todo-item">
        <input type="checkbox"
          className="todoCheckbox" onChange={e => { store.completed = !store.completed }}/>
        <span style={{textDecoration: store.completed ? 'line-through' : 'none' }}>{store.value}</span>
        <span onClick={ () => {
            todosStore.selectedID = store.id
            todosStore.deleteTodo()
          }
        } ><button>delete</button></span>
      </li>
    )
  }
}

export default observer(TodoItemView)
