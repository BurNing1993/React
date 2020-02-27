import React from 'react';
import './App.css';
import Counter from './components/Counter'
import ThemeSwitch from './components/ThemeSwitch'
import {useStore} from './store'
import { observer } from 'mobx-react'

function App() {
  const {themeStore:{theme}} = useStore();
  return (
    <div id="app" className={`container-fluid text-center ${theme}`}>
      <ThemeSwitch/>
      <Counter/>
    </div>
  );
}

export default observer(App);
