import React from 'react'
import {
  BrowserRouter as Router,
  Link,
  Route
}from 'react-router-dom'

const Home=()=>{
  return <div>Home</div>
}

const About=()=>{
  return <div>About</div>
}

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

const Topics=({match})=>(
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props vs State
        </Link>
      </li>
    </ul>
    <Route path={`${match.path}/:topicId`} component={Topic}/>
    <Route exact path={match.path} render={()=>(
       <h3>Please select a topic.</h3>
    )}/>

  </div>
)

const Router1=()=>(
  <Router>
    <div>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/topics'>Topics</Link>
        </li>
      </ul>
      <hr/>
      <Route exact path='/' component={Home}/>
      <Route path='/about' component={About}/>
      <Route path='/topics' component={Topics}/>
    </div>
  </Router>
)

export default Router1