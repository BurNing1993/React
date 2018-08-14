import React, { Component } from 'react';
import { connect } from 'react-redux';

class List extends Component {
   render() {
   return (
            <div>
                List
            </div>
        );
    }
 }
const mapStateToProps = (state) => {
return {

    }
}
const mapDispathToProps = (dispatch) => {
    return {

    }
}
 export default connect(mapStateToProps, mapDispathToProps)(List);
