import React from 'react'
import { observer } from 'mobx-react'
import TodoItemView from './TodoItemView'


class TodosView extends React.Component {
  render(){
    const state = this.props.todos;
    console.log(state.todos)
    const items = state.todos.map( todo => {
        return ( <TodoItemView key={todo.id} todo={todo} /> )
      }
    )
    return (
      <div>
        <ul>{items}</ul>
      </div>
    )
  }
}

export default observer(TodosView);
