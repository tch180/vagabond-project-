import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import Home from './components/Home/Home'


class App extends Component {
  render() {
    return (
      <Router>
      
        <Switch>
        <Route exact path="/" component={Home} />

        </Switch>
      
      </Router>
    );
  }
}

export default App;
