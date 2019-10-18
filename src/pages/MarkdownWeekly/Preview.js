import React from 'react';
import { inject, observer } from 'mobx-react';
import { Button } from 'antd';
import ReactMarkdown from '_src/components/WeeklyMarkdown';
import { globalMessage } from '_src/utils';
import './Preview.less';

@inject('markdownStore')
@observer
export default class Preview extends React.Component {
  copyText = () => {
    const element = document.querySelector('.preview-text');
    const range = document.createRange();
    range.selectNode(element); // 设定range包含的节点对象

    /* 窗口的selection对象，表示用户选择的文本 */
    const selection = window.getSelection();
    if (selection.rangeCount > 0) selection.removeAllRanges(); // 将已经包含的已选择的对象清除掉
    selection.addRange(range); // 将要复制的区域的range对象添加到selection对象中

    document.execCommand('copy');
    globalMessage('success', '复制成功！');
  }

  handleSource = (source, index, length) => {
    if (!source) {
      return '';
    }

    let result = source;
    result = result.replace(/^/, `${index}、`);
    result = result.replace(/$/, index < length ? '；' : '。');
    return result;
  }

  render() {
    const { markdownStore } = this.props;
    const { mdText } = markdownStore;

    return (
      <div className="weekly-preview-wrap">
        <div
          className="preview-text"
          ref={ref => { this.ref = ref; }}
        >
          <ReactMarkdown source={mdText} />
        </div>
        <Button
          type="primary"
          onClick={this.copyText}
        >
          一键复制
        </Button>
      </div>
    );
  }
}
