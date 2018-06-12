import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';
import 'fullpage.js';
import 'fullpage.js/dist/jquery.fullpage.css';
import 'fullpage.js/dist/jquery.fullpage.js';
import Page1 from './views/Page1.js';

class App extends Component {
  componentWillMount() {
    $(document).ready(function () {
      $('#fullpage').fullpage({
        navigation:true,
        navigationTooltips: ['page1', 'page2', 'page3','page4']
      });
    });
  }
  render() {
    return (
      <div id="fullpage">
        <div className="section"><Page1/></div>
        <div className="section"><Page1/></div>
        <div className="section"><Page1/></div>
        <div className="section"><Page1/></div>
      </div>
    );
  }
}

export default App;
