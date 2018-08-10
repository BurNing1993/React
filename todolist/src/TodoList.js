import React, { Component } from 'react';
import TodoItem from './TodoItem'

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            list: []
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleAddItem = this.handleAddItem.bind(this);
        this.handleDeleteItem = this.handleDeleteItem.bind(this)
    }
    handleInputChange() {
        const value=this.input.value
        this.setState(()=>({
            inputValue:value
        }))
        // this.setState({ inputValue: e.target.value });
    }
    handleAddItem() {
        this.setState((prevState)=>({
            list:[...prevState.list,prevState.inputValue],
            inputValue: ''
        }))
    }
    handleDeleteItem(index) {
        this.setState((prevState)=>{
            const list = prevState.list;
            list.splice(index, 1);
            return {list}
        })
    }

    getTodoItem() {
        return this.state.list.map((item, index) => {
            return <TodoItem className="list-group-item list-group-item-action list-group-item-success"
                key={index}
                item={item}
                index={index}
                deleteItem={this.handleDeleteItem}
            />
        })
    }
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                    </div>
                    <div className="col">
                        <div className="input-group mb-3">
                            <input type="text"
                                className="form-control"
                                placeholder="Input Add Item"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                                value={this.state.inputValue}
                                onChange={this.handleInputChange}
                                ref={(input)=>{this.input=input}}
                            />
                            <div className="input-group-append">
                                <button className="btn btn-outline-primary" type="button" onClick={this.handleAddItem}>Add</button>
                            </div>
                        </div>
                        <div className="list-group">
                            {this.getTodoItem()}
                        </div>
                    </div>
                    <div className="col">
                    </div>
                </div>
            </div>
        );
    }
}
export default TodoList;
