import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import Header from './header';
import DevTools from 'mobx-react-devtools'


@inject("store")
@observer
class App extends Component {
  render() {
    const { header } = this.props.store.headerStore;
    const { list } = this.props.store;
    return (
      <div>
        <Header />
        {list.map((item,index) => (<div key={index}>{item}</div>))}
        <span>
          {header}
        </span>
        <button onClick={this.props.store.addItem(44)}>ADD</button>
        <DevTools />
      </div>
    );
  }
}

export default App;
