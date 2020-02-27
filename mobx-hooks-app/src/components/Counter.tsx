import React from "react";
import { observer } from "mobx-react";
import { useStore } from "../store";

const Counter = () => {
  const {
    counterStore: { count, decrement, increment }
  } = useStore();

  return (
    <div className="row">
      <div className="col">
        <h1>count:{count}</h1>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => increment()}
        >
          Increment
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => decrement()}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};
// export default Counter;
export default observer(Counter);
