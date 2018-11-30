import React, { Component } from "react";
import { Route, withRouter, Switch } from "react-router-dom";
import { Layout, Menu, Icon } from "antd";

import Contents from "./Content";
import "./home.scss";

const { Header, Sider, Content } = Layout;

class Home extends Component {
  state = {
    collapsed: false
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    const { match } = this.props;
    return (
      <Layout className="container">
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span>nav 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span>nav 2</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span>nav 3</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: "#fff", padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
              onClick={this.toggle}
            />
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              background: "#fff",
              minHeight: 280
            }}
          >
            <Switch>
              {/* <Route path={`${match.url}/content`} exact  component={Contents} /> */}
              {/* <Route path="/content" exact component={Contents} /> */}

              <Route
                path={`${match.path}/content`}
                component={Contents}
              />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default withRouter(Home);
