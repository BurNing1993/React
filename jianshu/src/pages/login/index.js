import React, { Component } from 'react';
import { connect } from 'react-redux';

class Login extends Component {
   render() {
   return (
            <div>
                Login
            </div>
        );
    }
 }
const mapStateToProps = (state) => ({

})
const mapDispathToProps = (dispatch) => ({

})
 export default connect(mapStateToProps, mapDispathToProps)(Login);
