import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import TodoStore from './reduxStore';

ReactDOM.render(
  <Provider store={TodoStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);
