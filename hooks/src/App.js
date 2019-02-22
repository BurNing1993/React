import React, { useState ,useEffect} from 'react';
import { Button } from 'antd';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  useEffect(()=>{
    document.title = `You click ${count} times`;
  })

  return (
    <div>
      <p>你点击了{count}次</p>
      <Button type="primary" onClick={() => setCount(count + 1)}>
        点我
      </Button>
    </div>
  );
}

export default App;
