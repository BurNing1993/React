import React from 'react';
import ReactDOM from 'react-dom';
// import TodoList from './TodoList';
// import App from './App';
import Antd from './Antd';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

ReactDOM.render(<Antd />, document.getElementById('root'));
registerServiceWorker();
