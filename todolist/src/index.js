import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

ReactDOM.render(<TodoList />, document.getElementById('root'));
registerServiceWorker();
