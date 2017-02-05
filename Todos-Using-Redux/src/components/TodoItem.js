import React from 'react';

export const TodoItem = (props) => {

  return (
    <li className="todo-item">
      <input type="checkbox" className="todoCheckbox" defaultChecked={props.todo.completed} onChange={props.selectionChanged} />
      {props.todo.value}
    </li>
  );
}
