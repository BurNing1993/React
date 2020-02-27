import { observable, action, computed } from 'mobx';

export default class CounterStore {

  @observable
  count: number = 0;

  @action.bound
  increment(num: number = 1): number {
    return this.count += num;
  }

  @action.bound
  decrement(num: number = 1): number {
    return this.count -= num;
  }

  @computed
  get doubleCount() {
    return this.count * 2
  }
}