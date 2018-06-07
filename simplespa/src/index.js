import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bulma/css/bulma.min.css';

import registerServiceWorker from './registerServiceWorker';
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
