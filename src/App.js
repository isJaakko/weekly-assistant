import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import base from '_src/constants/base';
import SubRoutes from './subRoutes';

const { Header, Sider, Content } = Layout;
const { siteTitle } = base;

export default class App extends React.Component {
  state = {
    collapsed: true,
    currentPath: '/'
  };

  getMenuSelectKeys = () => {
    const { match: { path } } = this.props;
    this.setState({ currentPath: path });
  }

  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  };

  render() {
    const { collapsed, currentPath } = this.state;

    return (
      <Layout className="app" style={{ minHeight: '100vh' }}>
        <Header>
          <h1 className="site-title">{siteTitle}</h1>
        </Header>
        <Layout>
          <Sider
            className="menu-sider"
            theme="light"
            collapsible
            collapsed={collapsed}
            onCollapse={this.onCollapse}
          >
            <Menu
              theme="light"
              mode="inline"
              selectedKeys={[currentPath]}
            >
              <Menu.Item
                key="/"
              >
                <Icon type="edit" />
                <span>编辑周报</span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Content>
            {SubRoutes}
          </Content>
        </Layout>
      </Layout>
    );
  }
}
