import { action, observable } from 'mobx';

class HeaderStore {
    @observable header = 'AAAAAAAAAAAAAAAAAAAA';

    @action
    changeHeader(header) {
        this.header=header;
    }
}
const headerStore= new  HeaderStore()
export {headerStore} ;