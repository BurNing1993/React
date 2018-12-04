import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route ,Redirect} from 'react-router-dom'
import './App.css';

import Layout from './pages/Layout'
import Login from './pages/Login'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/layout' component={Layout}/>
          <Route path='/login' component={Login}/>
          <Redirect to="/layout" />
        </Switch>
      </Router>
    );
  }
}

export default App;
