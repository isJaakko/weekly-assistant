import React from 'react';
import { inject, observer } from 'mobx-react';
import { Divider } from 'antd';
import Editor from './Editor';
import Preview from './Preview';
import './index.less';

@inject('weeklyStore')
@observer
export default class Weekly extends React.Component {
  componentDidMount() {
    // window.addEventListener('beforeunload', this.listener);
  }

  componentWillUnmount() {
    // window.removeEventListener('beforeunload', this.listener);
  }

  listener = e => {
    e.preventDefault();
    e.returnValue = '离开当前页后，所编辑的数据将不可恢复'; // 浏览器有可能不会提示这个信息，会按照固定信息提示
  }

  render() {
    return (
      <div className="flex weekly-wrap">
        <Editor />
        <Divider type="vertical" />
        <Preview />
      </div>
    );
  }
}
