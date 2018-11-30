import React, { Component, Fragment } from 'react';
import {Switch, Route} from 'react-router-dom'
import {Header,Content,Footer} from './style'

import User from '../User'
import Data from '../Data'

class Layout extends Component {
    
   render() {
       const {match} =this.props
       console.log(this.props)
   return (
      <Fragment>
       <Header>Header</Header>
       <Content>
           <Switch>
               <Route path={match.path} exact component={User}/>
               <Route path={`${match.path}/user`}  component={User}/>
               <Route path={`${match.path}/data`}  component={Data}/>
           </Switch>
       </Content>
       <Footer>Footer</Footer>
      </Fragment>
    );
  }
}
 export default Layout;
