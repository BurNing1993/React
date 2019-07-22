import React, { Component } from 'react';
import ReactDom from 'react-dom';
import './index.scss';
import './index.css';

class App extends Component {
   render() {
    return (
        <div className="app">
            <div className="text">
                App
            </div>
        </div>
        );
    }
}

ReactDom.render(<App/>,document.getElementById('app'));
