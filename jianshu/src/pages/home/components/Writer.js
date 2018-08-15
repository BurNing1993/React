import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
    WriterWrapper  
}from '../style';

class Writer extends PureComponent {
   render() {
   return (
             <WriterWrapper>
                 Writer
             </WriterWrapper>
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
