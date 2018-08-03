import React, { Component, Fragment } from 'react';

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        const { deleteItem, index } = this.props;
        deleteItem(index)
    }
    render() {
        const { item } = this.props;
        return (
            <Fragment>
                <a className="list-group-item list-group-item-action list-group-item-success"
                    onClick={this.handleClick}
                >
                    {item}
                </a>
            </Fragment>
        );
    }
}
export default TodoItem;
