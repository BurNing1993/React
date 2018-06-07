import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
      return (
          <div className="columns">
          <div className="column">First column</div>
          <div className="column">Second column</div>
          <div className="column">Third column</div>
          <div className="column">Fourth</div>
        </div>
    );
  }
}

export default App;
