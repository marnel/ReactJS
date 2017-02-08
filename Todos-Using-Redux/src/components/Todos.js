import React from 'react'
import { TodoItem } from './TodoItem'
import { todoToggled } from '../actions/todoActions'
import { connect } from 'react-redux'

let Todos = ({todos, toggled}) => {
  const items = todos.map( todo =>
     <TodoItem key={todo.id} text={todo.value} completed={todo.completed} toggled={() => toggled(todo.id)} />
  )
  return (
    <div>
      <ul>{items}</ul>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggled: (id) => {
      dispatch(todoToggled(id))
    }
  }
}

Todos = connect(mapStateToProps, mapDispatchToProps)(Todos)

export default Todos;
