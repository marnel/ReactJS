import React from 'react';
import { observer } from 'mobx-react'

class AddTodoView extends React.Component {

  render(){
    const store = this.props.store;
    return (
      <div>
        <input type="text" className="addTaskInput" value={store.textVal} onChange={e => {store.textVal = e.target.value }} />
        <button className="addTaskButton" disabled={store.isTodoValid} onClick={store.addTask}>Add Task</button>
      </div>
    )
  }
}

export default observer(AddTodoView);

AddTodoView.propTypes = {
  store: React.PropTypes.object
}
