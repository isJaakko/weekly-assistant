import React from 'react';
import { Icon } from 'antd';
import ReactMarkdown from '_src/components/WeeklyMarkdown';
import { globalMessage } from '_src/utils';
import './index.less';

export default class Preview extends React.PureComponent {
  constructor(props) {
    super(props);
    this.copyRef = React.createRef();
  }

  copyText() {
    const element = document.querySelector('.weekly-preview-text');
    const range = document.createRange();
    range.selectNode(element); // 设定range包含的节点对象

    /* 窗口的selection对象，表示用户选择的文本 */
    const selection = window.getSelection();
    if (selection.rangeCount > 0) selection.removeAllRanges(); // 将已经包含的已选择的对象清除掉
    selection.addRange(range); // 将要复制的区域的range对象添加到selection对象中

    document.execCommand('copy');
    globalMessage('success', '复制成功！');
  }

  render() {
    const {
      source, className = '', copyTips = null, style = {}
    } = this.props;
    return (
      // eslint-disable-next-line
      <div
        className={`copy-weekly-preview ${className}`}
        style={style}
        ref={this.copyRef}
        onClick={this.copyText}
      >
        {
          copyTips === null ? (
            <div className="copy-wrap">
              点击空白处复制&nbsp;
              <Icon type="copy" />
            </div>
          ) : copyTips
        }
        <ReactMarkdown className="weekly-preview-text" source={source} />
      </div>
    );
  }
}
