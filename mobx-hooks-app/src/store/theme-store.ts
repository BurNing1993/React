import { observable, action } from 'mobx';

type themeType = 'light' | 'dark';

export default class ThemeStore {

  @observable
  theme: themeType = 'light';

  @action.bound
  setTheme(newTheme: themeType) {
    this.theme = newTheme;
  }
}