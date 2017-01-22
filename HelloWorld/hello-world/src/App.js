import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './clock.js';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          <h3>By Michael Arnel</h3>
          <br /><br />
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <Clock />
        </div>
      </div>
    );
  }

}

export default App;
