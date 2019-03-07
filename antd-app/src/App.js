import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Login from './views/login'
import Layout from './views/layout'
import Dashboard from './views/dashboard'
import NoMatch from './views/no-match'


import './App.css';

const App =()=>(
  <Router>
    <div className='app'>
      <Switch>
        <Route path='/layout' render={({match})=>(
          <Layout>
            <Switch>
              <Route path={`${match.url}/dashboard`} component={ Dashboard }/>
              <Route component={NoMatch}/>
            </Switch>
          </Layout>
        )}/>
        <Route exact path='/' component={ Login }/>
        <Route component={NoMatch}/>
      </Switch>
    </div>
  </Router>
)

export default App;
