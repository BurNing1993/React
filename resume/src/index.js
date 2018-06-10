import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'material-design-lite/material.min.js';
import 'material-design-lite/material.min.css';
import 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
