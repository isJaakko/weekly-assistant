import React from 'react';
import { withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import { Popconfirm, Button } from 'antd';
import Storage from '_src/utils/storage';
import Editor from './CodeMirror';
import Preview from './Preview';
import './index.less';

@withRouter
@inject('markdownStore')
@observer
export default class MarkdownWeekly extends React.Component {
  toSample = () => {
    this.props.history.push('/sample');
  }

  clearHistory = () => {
    const { markdownStore } = this.props;

    Storage.remove('weeklyList');
    markdownStore.clearWeeklyList();
  }

  useDemo = () => {
    const { markdownStore } = this.props;

    markdownStore.useDemo();
  }

  render() {
    return (
      <div className="weekly-wrap">
        <div className="tool-bar">
          <Button
            type="primary"
            onClick={this.toSample}
          >
            查看文档
          </Button>
          <Popconfirm
            title="当前操作将清除所有已写内容，确认继续？"
            onConfirm={this.clearHistory}
            okText="确认"
            cancelText="取消"
          >
            <Button
              type="danger"
              className="clear-btn"
            >
              初始化
            </Button>
          </Popconfirm>
          <Button
            className="clear-btn"
            onClick={this.useDemo}
          >
            查看Demo
          </Button>
        </div>
        <div className="flex weekly-wrap">
          <Editor />
          <Preview />
        </div>
      </div>
    );
  }
}
