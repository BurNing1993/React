import React  from 'react';
import { Provider } from 'react-redux';
import store  from './store'
import Counter from './views/Counter'
import './App.css';

// class App extends PureComponent {
//   render() {
//     return (
//       <Provider store={ store }>
//         <div className="App">
//           <Button type="primary">Button</Button>
//         </div>
//       </Provider>
//     );
//   }
// }

const App = () => (
  <Provider store={ store }>
    <div className="App">
      <Counter/>
    </div>
  </Provider>
)

export default App;
