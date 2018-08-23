import { action, observable } from 'mobx';

class Store {

    @observable list = [1,2,3];

    @action
    changeList(num) {
        this.list.unshift(num);
    }
}
export default  new Store();