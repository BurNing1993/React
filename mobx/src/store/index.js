import headerStore from '../header/store';

class Store {
    constructor() {
        this.headerStore = new headerStore()
    }
}
export default  new Store();