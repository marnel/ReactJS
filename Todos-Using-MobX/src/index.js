import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Todos from './Todos'

ReactDOM.render(
  <App store={new Todos()}/>,
  document.getElementById('root')
);
