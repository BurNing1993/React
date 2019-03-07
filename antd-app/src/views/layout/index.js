import React,{ useState } from 'react';
import { Layout, Menu, Icon } from 'antd';
import './layouy.css'

const { Header, Sider, Content } = Layout;

function AppLayout(props){
  const [collapsed,setCollapsed]=useState(false)
  return (
    <Layout className="layout">
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
        >
          <div className="logo" >
            <Icon type="html5" theme="twoTone" />
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
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
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={()=>{setCollapsed(!collapsed)}}
            />
          </Header>
          <Content style={{
            margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280,
          }}
          >
            {props.children}
          </Content>
        </Layout>
      </Layout>
  )
}
export default AppLayout;
