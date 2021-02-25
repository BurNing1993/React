# React-Redux-App

## deps

```sh
yarn add redux react-redux  redux-thunk
```

```sh
yarn add -D @types/react-redux
```

## store

### store/index.ts

```ts
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import counterReducer from "./counter/reducer";

const rootReducer = combineReducers({
  counter: counterReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default function configStore() {
  const store = createStore(rootReducer, applyMiddleware(thunk));
  return store;
}
```

### store/counter/types.ts

```ts
//  constants
export const ADD = 'ADD'
export const MINUS = 'MINUS'

// state
export interface CounterState {
  num: number;
}

// action
interface AddAction {
  type: typeof ADD;
}

interface MinusAction {
  type: typeof MINUS
}

export type CounterActionTypes = AddAction | MinusAction;
```

### store/counter/reducer.ts

```ts
import { ADD, MINUS, CounterState, CounterActionTypes } from "./types";

const INITIAL_STATE: CounterState = {
  num: 0
};

export default function counter(
  state = INITIAL_STATE,
  action: CounterActionTypes
): CounterState {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        num: state.num + 1
      };
    case MINUS:
      return {
        ...state,
        num: state.num - 1
      };
    default:
      return state;
  }
}
```

### store/counter/actions.ts

```ts
import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { RootState } from '..'
import {
  ADD,
  MINUS,
  CounterActionTypes
} from './types'

export const add = (): CounterActionTypes => {
  return {
    type: ADD
  }
}
export const minus = (): CounterActionTypes => {
  return {
    type: MINUS
  }
}

// 异步的 action
export function asyncAdd () :ThunkAction<void,RootState,unknown,Action<any>>{
  return dispatch => {
    setTimeout(() => {
      dispatch(add())
    }, 1000)
  }
}
```

## Components

### App.tsx

```ts
import React from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import configStore, { RootState } from "./store";
import { add, asyncAdd, minus } from "./store/counter/actions";

const store = configStore();

const Counter = () => {
  const counter = useSelector<RootState>(
    (state) => state.counter.num
  ) as number;
  const dispatch = useDispatch();
  return (
    <div>
      <span>{counter}</span>
      <button onClick={() => dispatch(add())}>+</button>
      <button onClick={() => dispatch(minus())}>+</button>
      <button onClick={() => dispatch(asyncAdd())}>Async+(2s)</button>
    </div>
  );
};

function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default App;
```