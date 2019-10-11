import React, { PureComponent } from 'react';
import { Layout } from 'antd';
import Weekly from '../Weekly';

// const { Content } = Layout;

export default class Home extends PureComponent {
  render() {
    return (
      <Layout>
        <h1>Weekly Assistant</h1>
        <Weekly />
      </Layout>
    );
  }
}
