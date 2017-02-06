import React from 'react';
import { connect } from 'react-redux'
import {addNewTodo, todoTextInputChanged } from '../actions/todoActions'

let AddTodo = ({textValue, onAddClick, onTextChanged}) => {

  let input;

  return (
    <div>
      <input type="text" className="addTaskInput" value={textValue} onChange={ e => { onTextChanged(e.target.value) }} />
      <button className="addTaskButton" onClick={ e => { onAddClick(textValue) } }>Add Task</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    textValue: state.textValue
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddClick: (id) => {
      if (id !== ''){
        dispatch(addNewTodo(id))
      }
      else { alert('No Value Entered!')}
    },
    onTextChanged: (text) => {
      dispatch(todoTextInputChanged(text))
    }
  }
}

AddTodo = connect(mapStateToProps, mapDispatchToProps)(AddTodo)
export default AddTodo
