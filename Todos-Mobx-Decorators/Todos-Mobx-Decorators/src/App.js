import React, {Component} from 'react'
import {observer} from 'mobx-react'
import DevTools from 'mobx-react-devtools'
import TodosView from './components/TodosView';
import AddTodoView from './components/AddTodoView'
import logo from './logo.svg'
import './App.css';


class App extends Component {
  render() {

    const store = this.props.store;

    return (
      <div className="App">
        <div className="App-header">
          <h1>TODOS using Mobx!</h1>
          <span className="powered-by">powered by:</span> <img src={logo} className="App-logo" alt="logo" />
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="todos-container">
          <h2>Checklist</h2>
          <AddTodoView store={store} />
          <TodosView store={store} />
        </div>
        <DevTools />
      </div>
    )
  }
}

export default observer(App);
