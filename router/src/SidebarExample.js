import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'


const routes = [
    {
        path: '/',
        exact: true,
        sidebar: () => <div>Home!</div>,
        main: () => <h2>Home!</h2>
    },
    {
        path: '/bubblegum',
        sidebar: () => <div>bubblegum!</div>,
        main: () => <h2>bubblegum!</h2>
    },
    {
        path: '/shoelaces',
        sidebar: () => <div>shoelaces!</div>,
        main: () => <h2>shoelaces!</h2>
    },
]

class SidebarExample extends Component {
    render() {
        return (
          <Router>
              <div style={{display:'flex'}}>
                <div style={{
                    padding:'10px',
                    width:'40%',
                    background:'#f0f0f0'
                }}>
                <ul style={{listStyleType:'none',padding:0}}>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/bubblegum'>bubblegum</Link></li>
                    <li><Link to='/shoelaces'>shoelaces</Link></li>
                </ul>
                {routes.map((routes,index))=>(
                    <Route 
                    key={index}
                    path={routes.path}
                    exact={route}
                )

                }
                </div>
              </div>
          </Router> 
        );
    }
}
export default SidebarExample;
