import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        const { deleteItem, index } = this.props;
        deleteItem(index)
    }

    shouldComponentUpdate(nextProps,nextState){
        if (nextProps.item!==this.props.item) {
            return true;
        }else{
            return false;
        }
    }

    render() {
        const { item ,test} = this.props;
        return (
            <Fragment>
                <a className="list-group-item list-group-item-action list-group-item-success"
                    onClick={this.handleClick}
                >
                    {test}-{item}
                </a>
            </Fragment>
        );
    }
    componentDidMount(){
        //ajax
    }
}

TodoItem.propTypes={
    test:PropTypes.string.isRequired,
    item:PropTypes.string.isRequired,
    deleteItem:PropTypes.func,
    index:PropTypes.number
}

TodoItem.defaultProps={
    test:'Hello World!'
}
export default TodoItem;
