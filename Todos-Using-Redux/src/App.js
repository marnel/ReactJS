import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import TodosLink  from './containers/TodosLink'
import AddTodo from './containers/AddTodo'

class App extends Component {

  loadTodos(){
      return [
        {id: 1, value: 'test 1', completed: false },
        {id: 2, value: 'test 2', completed: true },
        {id: 3, value: 'test 3', completed: false },
      ]
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
