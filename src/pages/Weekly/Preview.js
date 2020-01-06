import React from 'react';
import { inject, observer } from 'mobx-react';
import { Icon } from 'antd';
import classNames from 'classnames';
import { copyText } from '_src/utils';
import './Preview.less';

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
        <div className="copy-wrap">
          点击空白处复制&nbsp;
          <Icon type="copy" />
        </div>
        {/* eslint-disable-next-line */}
        <div
          className="preview-text"
          ref={ref => { this.ref = ref; }}
          onClick={() => {
            copyText('.preview-text');
          }}
        >
          {
            this.renderTreeList(weeklyTree)
          }
        </div>
      </div>
    );
  }
}
