import { action, observable, computed, autorun } from 'mobx';

import headerStore from '../header/store';

class Store {
    constructor() {
        this.headerStore = new headerStore()
    }

    @observable count = 0;
    @observable list = [2, 3];
    @computed get listLength() {
        return this.list.length;
    }
    @action addItem() {
        this.list.push(22)
    }

    @action addCount(num){
        this.count+=num;
    }
}
const store = new Store();
autorun(() => console.log(store.count));

// setInterval(()=>{
//     store.addCount(); 
// },5000)
export default store;