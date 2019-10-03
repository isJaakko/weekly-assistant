import { action, computed, observable } from 'mobx';
import Template from '_src/constants';

const defaultWeeklyItem = {
  title: '',
};

class WeeklyStore {
  /**
   * observable
   */

  // 列表
  @observable weeklyList = Template || [];

  // 更新内容
  @observable formInfo = {
    weekly: {}
  };

  /**
   * computed
   */
  @computed get weeklyTree() {
    return this.renderTree(this.weeklyList) || [];
  }

  /**
   * action
   */

  // 更新表单数据
  @action updateFormInfo(object, key, value) {
    this[object] = {
      ...this[object],
      [key]: value
    };
  }

  // 新增列表项
  @action addWeeklyItem(parentId) {
    this.weeklyList = [
      ...this.weeklyList,
      {
        ...defaultWeeklyItem,
        id: `${parentId}_${this.weeklyList.length}`,
        parentId,
        children: []
      }
    ];
  }

  // 删除列表项
  @action deleteWeeklyItem(id) {
    this.weeklyList = this.weeklyList.filter(item => item.id !== id) || [];
  }

  // 更新列表数据
  @action updateList(id) {
    this.weeklyList = this.weeklyList.map((item) => {
      if (item.id === id) {
        return { ...this.formInfo.weekly };
      }
      return { ...item };
    }) || [];
  }

  // 获取根节点
  @action getRoot() {
    return this.weeklyList.filter(item => item.parentId === -1);
  }

  // 包装数据成树形结构
  @action renderTree() {
    let result = [];

    // eslint-disable-next-line
    this.getRoot().map((item) => {
      result = [
        ...result,
        {
          ...item,
          children: this.getChildren(item)
        }
      ];
    });

    return result;
  }

  // 配合 renderTree 使用
  @action getChildren(node) {
    const children = [];

    // eslint-disable-next-line
    this.weeklyList.map((item) => {
      if (item.parentId === node.id) {
        children.push({
          ...item,
          children: this.getChildren(item)
        });
      }
    });

    return children;
  }
}

export default WeeklyStore;
