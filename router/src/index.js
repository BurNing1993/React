import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
// import App from './App'
// import ParamsExample from './ParamsExample'
// import CustomLinkExample from './CustomLinkExample'
// import PreventingTransitionsExample from './PreventingTransitionsExample'
// import NoMatchExample from './NoMatchExample'
import RecursiveExample from './RecursiveExample'
// import AuthExample from './AuthExample'


ReactDOM.render( 
    <RecursiveExample/>
    ,document.getElementById('root'));
registerServiceWorker();
