import React from 'react';

export const TodoItem = ({completed, text, toggled}) => {

  return (
    <li className="todo-item">
      <input type="checkbox"
        className="todoCheckbox" defaultChecked={completed} onChange={toggled} />
      <span style={{textDecoration: completed ? 'line-through' : 'none' }}>{text}</span>
    </li>
  );
}
