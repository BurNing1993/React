import { Layout } from "antd";
import React, { Component } from "react";

const { Header, Footer, Sider, Content } = Layout;

import Asd from './SiderMenu'

class BasicLayout extends Component {
  render() {
    return (
      <Layout>
        <Sider width={256} style={{minHeight:'100vh',color:'white'}}>
          <Asd/>
        </Sider>
        <Layout>
          <Header style={{background:'#fff',textAlgin:'center',padding:0}}>
            Header
          </Header>
          <Content style={{margin:'24px 16px 0'}}>
            <div style={{padding:24,background:'#fff',minHeight:360}}>
              {this.props.children}
            </div>
          </Content>
          <Footer style={{textAlgin:'center'}}>Footer</Footer>
        </Layout>
      </Layout>
      );
  }
}
export default BasicLayout;
