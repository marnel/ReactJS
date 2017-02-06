import React from 'react'
import { TodoItem } from './TodoItem'

export const Todos = ({todos, action}) => {
  const items = todos.map( todo =>
     <TodoItem key={todo.id} todo={todo}  />
  )
  return (
    <div>
      <ul>{items}</ul>
    </div>
  )
}
