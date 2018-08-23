import { action, observable } from 'mobx';

class HeaderStore {
    @observable header = 'AAAAAAAAAAAAAAAAAAAA';

    @action
    changeHeader(header) {
        this.header=header;
    }
}
export default  HeaderStore;