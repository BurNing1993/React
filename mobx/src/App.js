import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import Header from './header';
import DevTools from 'mobx-react-devtools'


@inject("store")
@observer
class App extends Component {
  constructor(){
    super();
    this.handleClick=this.handleClick.bind(this);
  }

  handleClick(){
    this.props.store.addCount(333);
  }
  render() {
    const {count} =this.props.store;
    return (
      <div> 
        <Header />
        <div>
          {
            count
          }
        </div>
        <button onClick={this.handleClick}>BUTTON</button>
      </div>
    );
  }
}

export default App;
