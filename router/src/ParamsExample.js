import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import Child from './views/Child';

class ParamsExample extends Component {
    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li><Link to="/react-router">React Router</Link></li>
                        <li><Link to="/leoashin">LeoAshin</Link></li>
                        <li><Link to="/justjavac">justjavac</Link></li>
                        <li><Link to="/reacttraining">React Training</Link></li>
                    </ul>

                    <Route path='/:id' component={Child}/>
                </div>
            </Router>
        );
    }
}
export default ParamsExample;
