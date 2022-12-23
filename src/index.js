import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import About from './views/about'
import Projects from './views/projects'
import Collaborate from './views/collaborate'
import TWE from './views/t-w-e'
import Home from './views/home'
import Blog from './views/blog'
import Page from './views/page'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={About} exact path="/about" />
        <Route component={Projects} exact path="/projects" />
        <Route component={Collaborate} exact path="/collaborate" />
        <Route component={TWE} exact path="/t-w-e" />
        <Route component={Home} exact path="/" />
        <Route component={Blog} exact path="/blog" />
        <Route component={Page} exact path="/page" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
