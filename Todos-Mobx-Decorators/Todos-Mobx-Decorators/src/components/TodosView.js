import React from 'react'
import { observer } from 'mobx-react'
import TodoItemView from './TodoItemView'


class TodosView extends React.Component {
  render(){
    const store = this.props.store
    const items = store.todos.map( todo => {
        return ( <TodoItemView key={todo.id} todo={todo} store={store} /> )
      }
    )
    return (
      <div>
        <ul>{items}</ul>
      </div>
    )
  }
}

export default observer(TodosView)

TodosView.propTypes = {
  store: React.PropTypes.object
}
