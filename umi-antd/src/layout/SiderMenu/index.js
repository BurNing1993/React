import React, { Component } from "react";
import { Menu, Icon } from "antd";
import Link from 'umi/link'

const { SubMenu } = Menu;

class SiderMenu extends Component {
  render() {
    return (
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
      <Menu.Item key="1">
        <Link to='/helloworld'>
          <Icon type="pie-chart" />
          <span>Helloworld</span>
        </Link>
      </Menu.Item>
      <SubMenu
        key="sub1"
        title={<span><Icon type="dashboard" /><span>Dashboard</span></span>}
      >
         <Menu.Item key="2"><Link to="/dashboard/analysis">分析页</Link></Menu.Item>
         <Menu.Item key="3"><Link to="/dashboard/monitor">监控页</Link></Menu.Item>
         <Menu.Item key="4"><Link to="/dashboard/workplace">工作台</Link></Menu.Item>
      </SubMenu>
    </Menu>
    );
  }
}
export default SiderMenu;
