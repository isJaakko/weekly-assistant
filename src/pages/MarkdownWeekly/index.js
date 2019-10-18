import React from 'react';
import { inject, observer } from 'mobx-react';
import { Popconfirm, Button } from 'antd';
import Storage from '_src/utils/storage';
import Editor from './CodeMirror';
import Preview from './Preview';
import './index.less';

@inject('markdownStore')
@observer
export default class MarkdownWeekly extends React.Component {
  clearHistory = () => {
    const { markdownStore } = this.props;

    Storage.remove('weeklyList');
    markdownStore.clearWeeklyList();
  }

  render() {
    return (
      <div className="weekly-wrap">
        <div className="tool-bar">
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
        </div>
        <div className="flex weekly-wrap">
          <Editor />
          <Preview />
        </div>
      </div>
    );
  }
}
