import React from 'react';
import { inject, observer } from 'mobx-react';
import classNames from 'classnames';
import { Button } from 'antd';
import { globalMessage } from '_src/utils';

const OREDR_LEVEL = 3;

@inject('weeklyStore')
@observer
export default class Preview extends React.Component {
  renderTreeList = (treeList) => {
    return treeList.map((tree, index, array) => {
      if (tree.children.length) {
        return (
          <div key={tree.id}>
            <div
              className={
                classNames(
                  `template-title-level-${tree.level}`,
                  {
                    'template-alarm-title-level-1': tree.level === 1 && tree.type === 'alarm'
                  }
                )
              }
            >
              {tree.show && tree.title}
            </div>
            {this.renderTreeList(tree.children)}
          </div>
        );
      }
      return (
        <div
          key={tree.id}
        >
          <div
            className={
              classNames(
                `template-title-level-${tree.level}`,
                {
                  'template-alarm-title-level-1': tree.level === 1 && tree.type === 'alarm'
                }
              )
            }
          >
            {tree.show && (tree.level === OREDR_LEVEL
              ? `${index + 1}、${tree.title}${index < array.length - 1 ? '；' : '。'}`
              : tree.title)}
            {index === (array.length - 1) ? <br /> : null}
            <br />
          </div>
        </div>
      );
    });
  }

  render() {
    const { weeklyStore } = this.props;
    const { weeklyTree } = weeklyStore;

    return (
      <div className="preview-wrap">
        <div
          className="preview-text"
          ref={ref => { this.ref = ref; }}
        >
          {
            this.renderTreeList(weeklyTree)
          }
        </div>
        <Button
          type="primary"
          onClick={() => {
            const element = document.querySelector('.preview-text');
            const range = document.createRange();
            range.selectNode(element); // 设定range包含的节点对象

            /* 窗口的selection对象，表示用户选择的文本 */
            const selection = window.getSelection();
            if (selection.rangeCount > 0) selection.removeAllRanges(); // 将已经包含的已选择的对象清除掉
            selection.addRange(range); // 将要复制的区域的range对象添加到selection对象中

            document.execCommand('copy');
            globalMessage('success', '复制成功！');
          }}
        >
          一键复制
        </Button>
      </div>
    );
  }
}
