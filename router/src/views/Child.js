import React, { Component } from 'react';

class Child extends Component {
    render() {
        return (
            <div>
                <h3>ID: {this.props.match.params.id}</h3>
            </div>
        );
    }
}
export default Child;
