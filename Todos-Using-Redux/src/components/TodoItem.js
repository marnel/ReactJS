import React from 'react';

export const TodoItem = ({completed, text, toggled}) => {

  return (
    <li className="todo-item">
      <input type="checkbox"
        style={{textDecoration: completed ? 'line-through' : 'none' }}
        className="todoCheckbox" defaultChecked={completed} onChange={toggled} />
      {text}
    </li>
  );
}
