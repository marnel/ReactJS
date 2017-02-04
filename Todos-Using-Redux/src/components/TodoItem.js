import React from 'react';

class TodoItem extends React.Component {

    render() {
        const todo = this.props.todo;
        return (
          <li className="todo-item" key={todo.id}>
            <input type="checkbox" className="todoCheckbox"/>
            {todo.value}
          </li>
        );
    }
}

export default TodoItem;
