import React from 'react'
import { TodoItem } from './TodoItem'

export const Todos = ({todos, toggled}) => {
  const items = todos.map( todo =>
     <TodoItem key={todo.id} text={todo.value} todo={todo} toggled={() => toggled(todo.id)} />
  )
  return (
    <div>
      <ul>{items}</ul>
    </div>
  )
}
