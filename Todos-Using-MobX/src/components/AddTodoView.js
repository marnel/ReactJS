import React from 'react';
import { observer } from 'mobx-react'

class AddTodoView extends React.Component {

  render(){
    const store = this.props.todos;
    return (
      <div>
        <input type="text" className="addTaskInput" value={store.textVal} onChange={e => {store.textVal = e.target.value }} />
        <button className="addTaskButton" onClick={store.addNewTask}>Add Task</button>
      </div>
    )
  }
}

export default observer(AddTodoView);
