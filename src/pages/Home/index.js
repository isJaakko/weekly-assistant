import React, { PureComponent } from 'react';
import { Layout } from 'antd';
import Editor from '../Editor';
// import styles from './index.less';

const { Content } = Layout;

export default class Home extends PureComponent {
  render() {
    return (
      <Layout>
        {/* <Sider>
          Header
      </Sider> */}
        <Content>
          <Editor />
        </Content>
      </Layout>
    );
  }
}
