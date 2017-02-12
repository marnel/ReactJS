import React from 'react';
import { observer } from 'mobx-react'

class AddTodoView extends React.Component {

  render(){
    const state = this.props.todos;
    return (
      <div>
        <input type="text" className="addTaskInput" onChange={e => {state.textVal = e.target.value }} />
        <button className="addTaskButton" onClick={state.addNewTask}>Add Task</button>
      </div>
    )
  }
}

export default observer(AddTodoView);
