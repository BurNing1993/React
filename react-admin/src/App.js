import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import { Provider } from "react-redux";

import store from "./store";

import Home from "./views/Home";
import About from "./views/About";
import Login from "./views/Login";
import Page404 from "./views/404";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/about" component={About} />
            <Redirect from='/' exact to='/login' />
            <Route component={Page404}/>
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
