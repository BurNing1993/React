import React, { useState } from 'react';
import { Button, message } from 'antd';

const UseState: React.FC = () => {

  const [count, setCount] = useState(0);

  const minus: Function = () => {
    if (count - 1 <= 0) {
      setCount(0)
      message.info('Count min is 0');
    } else {
      setCount(count - 1)
    }
  }


  return (
    <div>
      <div className="example">
        <p>Count = {count}</p>
        <Button type="primary" onClick={() => { setCount(count + 1) }}>+1</Button>
        <Button type="primary" onClick={() => { minus() }}>-1</Button>
      </div>
    </div>
  )
}
export default UseState;
