import React from 'react';
import {TodoItem} from './TodoItem';

export const Todos = (props) => {
  const items = props.todos.map( todo =>
     <TodoItem key={todo.id} todo={todo} selectionChanged={props.selectionChanged.bind(this,todo)} />
  );
  return (
    <div>
      <ul>{items}</ul>
    </div>
  );
}
