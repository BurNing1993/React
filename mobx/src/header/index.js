import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject("store")
@observer
class Header extends Component {
    render() {
        return (
            <div>
                {this.props.store.headerStore.header}
            </div>
        );
    }
}
export default Header;
