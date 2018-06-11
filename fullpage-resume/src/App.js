import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';
import 'fullpage.js';

class App extends Component {
  componentWillMount() {
    $(document).ready(function () {
      $('#fullpage').fullpage({
        anchors: ['page1', 'page2', 'page3', 'page4'],
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['page1', 'page2', 'page3', 'page4'],
      });
    });
  }
  render() {
    return (
     
      <div id="fullpage">
        <div className="section">Some section1</div>
        <div className="section">Some section2</div>
        <div className="section">Some section3</div>
        <div className="section">Some section4</div>
      </div>
    );
  }
}

export default App;
