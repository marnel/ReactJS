import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todos from './components/Todos';

class App extends Component {

  constructor(){
    super();
    this.state = {todos: this.loadTodos()};
  }

  loadTodos(){
      return [
        {id: 1, value: 'test 1', completed: false },
        {id: 2, value: 'test 2', completed: false },
        {id: 3, value: 'test 3', completed: false },
      ]
  }

  deleteTask = () => {

  }

  createTask = () => {
    let todos = this.state.todos;
    let todo = {id: Date.now(), value: this.state.text, completed: false };
    todos.push(todo);
    this.setState({todos: todos});
  }

  textChanged = (e) => {
    this.setState({ text: e.target.value })
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
          <input type="text" className="addTaskInput" onChange={this.textChanged} /><button className="addTaskButton" onClick={this.createTask}>Add Task</button>
          <Todos todos={this.state.todos} />
        </div>
      </div>
    );
  }
}

export default App;
