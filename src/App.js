import React from 'react';
import { withRouter } from 'react-router-dom';
import { Layout } from 'antd';
import LeftMenu from '_src/components/LeftMenu';
import base from '_src/constants/base';

const { Header, Sider, Content } = Layout;
const { siteTitle } = base;

@withRouter
export default class App extends React.Component {
  state = {
    collapsed: true,
  };

  componentDidMount() {
    document.title = siteTitle;
  }

  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;

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
            <LeftMenu />
          </Sider>
          <Content className="flex flex-direction-column main-content">
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}
