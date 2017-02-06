import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import TodosLink  from './containers/TodosLink'
import { createTodo, toggleChecked, findTodoById, updateTodo } from './lib/todoHelpers'
import AddTodo from './containers/AddTodo'

class App extends Component {

  loadTodos(){
      return [
        {id: 1, value: 'test 1', completed: false },
        {id: 2, value: 'test 2', completed: true },
        {id: 3, value: 'test 3', completed: false },
      ]
  }

  // Using experimental notation to bind function to this thru arrow function.
  // More stable approach would be to bind it in the constructor.
  deleteTask = () => {

  }

  createTask = () => {
    const todos = this.state.todos
    const todo = {id: Date.now(), value: this.state.text, completed: false }
    const newTodos = createTodo(todos, todo)
    this.setState({todos: newTodos})
  }

  textChanged = (e) => {
    this.setState({ text: e.target.value })
  }

  todoSelectionChanged = (todo) => {
    var t = toggleChecked(findTodoById(todo.id, this.state.todos))
    const updatedTodos = updateTodo(this.state.todos, t)
    this.setState({todos: updatedTodos})
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>TODOS using Redux!</h1>
          <span className="powered-by">powered by:</span> <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="todos-container">
          <h2>Checklist</h2>
          <AddTodo />
          <TodosLink />
        </div>
      </div>
    );
  }
}

export default App
