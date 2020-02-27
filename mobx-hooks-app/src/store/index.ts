import { createContext, useContext } from "react"
import CounterStore from './counter-store'
import ThemeStore from './theme-store'

const store = {
  counterStore: new CounterStore(),
  themeStore: new ThemeStore(),
}

const storeContext = createContext(store);

export const useStore = () => useContext(storeContext);
