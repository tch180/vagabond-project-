import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import Home from './components/Home/Home'
import NavBar from './components/BoilerPlate/NavBar'
import CityShow from './components/City/Show'

class App extends Component {
  render() {
    return (
      <Router>
        <div>

          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/city/:cityId" component={CityShow} /> 

          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
