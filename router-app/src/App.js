import React, { Component } from 'react';
import './App.css';
import Button from 'antd/lib/button';
import Router1 from './pages/router1'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button type="primary">Button</Button>
        <Router1/>
      </div>
    );
  }
}
export default App;
