import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Router, Route, browserHistory } from 'react-router'
import AboutPage from './pages/about'
import TestPage from './pages/test'
import './index.css'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/about" component={AboutPage} />
      <Route path="/test" component={TestPage} />
    </Route>
  </Router>,
  document.getElementById('root')
)
