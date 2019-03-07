import React from 'react';
import { Row, Col, Card } from 'antd';
import LoginForm from './LoginForm'
import './login.css'

function Login(){
  return (
    <Row type="flex" align="middle" className="login">
      <Col xs={2} sm={4} md={6} lg={8} xl={9}></Col>
      <Col xs={20} sm={16} md={12} lg={8} xl={6}>
        <Card
          title="Login"
          style={{ width: '100%', marginTop:'-50px' }}
        >
          <LoginForm/>
        </Card>
      </Col>
      <Col xs={2} sm={4} md={6} lg={8} xl={9}></Col>
    </Row>
  )
}

export default Login;