import React from 'react';
import { observer } from 'mobx-react'

class AddTodoView extends React.Component {
  render(){
    const state = this.props.todos;
    return (
      <div>
        <input type="text" className="addTaskInput" value={state.textVal} onChange={e => {state.textVal = e.target.value }} />
        <button className="addTaskButton" onClick={state.addTask}>Add Task</button>
      </div>
    )
  }
}


export default observer(AddTodoView);
