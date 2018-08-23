import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import Header from './header';

@inject("store")
@observer
class App extends Component {
  render() {
    const {list,header}=this.props.store;
    return (
      <div> 
        <Header />
        {list}
        <span>
          {header}
        </span>
      </div>
    );
  }
}

export default App;
