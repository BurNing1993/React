import headerStore from '../header/store';
import { action, observable } from 'mobx';

class Store {
    constructor() {
        this.headerStore = new headerStore()
    }

    @observable list=[1,3];

    @action.bound addItem(num){
        this.list.push(num);
    }
    
}
export default  new Store();