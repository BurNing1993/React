import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import Header from './header';

@inject("store")
@observer
class App extends Component {
  render() {
    const {header}=this.props.store.headerStore;
    return (
      <div> 
        {
          console.log(this.props)
        }
        <Header />
        <span>
          {header}
        </span>
      </div>
    );
  }
}

export default App;
