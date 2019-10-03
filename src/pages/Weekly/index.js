import React from 'react';
import { inject, observer } from 'mobx-react';
// import { Layout } from 'antd';
import Editor from './Editor';
import Preview from './Preview';
import './index.less';

// const { Sider, Content } = Layout;

@inject('weeklyStore')
@observer
export default class Weekly extends React.Component {
  render() {
    return (
      <div className="flex weekly-wrap">
        <Editor />
        <Preview />
      </div>
    );
  }
}
