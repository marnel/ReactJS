import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Todos} from './components/Todos';
import {createTodo, toggleChecked, findTodoById, updateTodo} from './lib/todoHelpers';

class App extends Component {

  constructor(){
    super();
    this.state = {todos: this.loadTodos()};
  }

  loadTodos(){
      return [
        {id: 1, value: 'test 1', completed: false },
        {id: 2, value: 'test 2', completed: true },
        {id: 3, value: 'test 3', completed: false },
      ]
  }

  deleteTask = () => {

  }

  createTask = () => {
    const todos = this.state.todos;
    const todo = {id: Date.now(), value: this.state.text, completed: false };
    const newTodos = createTodo(todos, todo);
    this.setState({todos: newTodos});
  }

  textChanged = (e) => {
    this.setState({ text: e.target.value })
  }

  todoSelectionChanged = (todo) => {
    var t = toggleChecked(findTodoById(todo.id, this.state.todos));
    const updatedTodos = updateTodo(this.state.todos, t);
    this.setState({todos: updatedTodos});
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
          <input type="text" className="addTaskInput" onChange={this.textChanged} />
          <button className="addTaskButton" onClick={this.createTask}>Add Task</button>
          <Todos todos={this.state.todos} selectionChanged={this.todoSelectionChanged} />
        </div>
      </div>
    );
  }
}

export default App;
