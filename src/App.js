import React from 'react';
import { withRouter } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
import base from '_src/constants/base';

const { Header, Sider, Content } = Layout;
const { siteTitle } = base;

@withRouter
export default class App extends React.Component {
  state = {
    collapsed: true,
    currentPath: '/'
  };

  componentDidMount() {
    this.getMenuSelectKeys();
  }

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
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}
