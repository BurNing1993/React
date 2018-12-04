import React, { Component } from "react";
import { Row, Col} from "antd";

import WrappedNormalLoginForm from './WrappedNormalLoginForm.js'
import './login.css'

class Login extends Component {
  handleLogin(){
    this.props.history.push('/home')
  }
  render() {
    return (
      <Row>
        <Col xs={2} sm={4} md={6} lg={8} xl={10}>
        </Col>
        <Col xs={20} sm={16} md={12} lg={8} xl={4}>
          <div>
            Login
          </div>
          <WrappedNormalLoginForm handleLogin={this.handleLogin.bind(this)}/>
        </Col>
        <Col xs={2} sm={4} md={6} lg={8} xl={10}>
        </Col>
      </Row>
    );
  }
}

export default Login;
