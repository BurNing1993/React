import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import UseState from './pages/use-state/index';
import Home from './pages/home';
import UseEffect from './pages/use-effect';

const { Header, Content, Footer } = Layout;

const App: React.FC = () => {
  const path = window.location.pathname;
  return (
    <Router>
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={[path]}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="/">
              <Link to="/">
                Home
              </Link>
            </Menu.Item>
            <Menu.Item key="/use-state">
              <Link to="/use-state">
                useState
              </Link>
            </Menu.Item>
            <Menu.Item key="/use-effect">
              <Link to="/use-effect">
                useEffect
              </Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <div style={{ background: '#fff', padding: 24, minHeight: `calc(100vh - 154px)` }}>
            <Route path='/' exact component={Home} />
            <Route path='/use-state' component={UseState} />
            <Route path='/use-effect' component={UseEffect} />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Joey ©2019</Footer>
      </Layout>
    </Router>
  );
}



export default App;
