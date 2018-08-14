import React, { Component } from 'react';
import { connect } from 'react-redux';

class Detail extends Component {
   render() {
   return (
            <div>
                Detail
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
 export default connect(mapStateToProps, mapDispathToProps)(Detail);
