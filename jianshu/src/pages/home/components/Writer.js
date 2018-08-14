import React, { Component } from 'react';
import { connect } from 'react-redux';

class Writer extends Component {
   render() {
   return (
             <div>
                 Writer
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
 export default connect(mapStateToProps, mapDispathToProps)(Writer);
