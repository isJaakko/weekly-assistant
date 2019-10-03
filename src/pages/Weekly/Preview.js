import React from 'react';
import { inject, observer } from 'mobx-react';
// import classNames from 'classnames';
// import template from '_src/constants';

@inject('weeklyStore')
@observer
export default class Preview extends React.Component {
  renderTreeList = (treeList) => {
    return treeList.map((tree) => {
      if (tree.children.length) {
        return (
          <div key={tree.id}>
            <div>{tree.title} {tree.id} {tree.parentId}</div>
            {this.renderTreeList(tree.children)}
          </div>
        );
      }
      return <div key={tree.id}>{tree.title} {tree.id} {tree.parentId}</div>;
    });
  }

  render() {
    const { weeklyStore } = this.props;
    const { weeklyTree } = weeklyStore;

    return (
      <div className="preview-wrap">
        {
          this.renderTreeList(weeklyTree)
        }
      </div>
    );
  }
}
