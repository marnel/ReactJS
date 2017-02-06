import React from 'react';
import { connect } from 'react-redux'
import {addNewTodo, todoTextInputChanged } from '../actions/todoActions'

let AddTodo = ({dispatch}) => {

  let input;

  return (
    <div>
      <input type="text" ref={node => {
          input = node
        }} className="addTaskInput" onChange={ e => { dispatch(todoTextInputChanged(e.target.value)) }} />
      <button className="addTaskButton" onClick={ e => { dispatch(addNewTodo(input.value))} }>Add Task</button>
    </div>
  )
}

AddTodo = connect()(AddTodo)
export default AddTodo
