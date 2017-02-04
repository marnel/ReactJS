import React from 'react';
import TodoItem from './TodoItem';

class Todos extends React.Component {
    render(){
      console.log(this.props.todos);
        const items = this.props.todos.map( todo => <TodoItem key={todo.id} todo={todo} />);
        return (
          <div>
            <ul>{items}</ul>
          </div>
        );
    }
}

export default Todos;
