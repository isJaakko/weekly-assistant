import React from 'react';
import { inject, observer } from 'mobx-react';
// import { Tree } from 'antd';
import classNames from 'classnames';
// import template from '_src/constants';

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
                  `template-title-level-${tree.level}`
                )
              }
            >
              {tree.title}
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
            {tree.level === OREDR_LEVEL
              ? `${index + 1}、${tree.title}${index < array.length - 1 ? '；' : '。'}`
              : tree.title}

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
        {/* <Tree treeData={weeklyTree} defaultExpandAll /> */}
        <br />
        {
          this.renderTreeList(weeklyTree)
        }
      </div>
    );
  }
}
