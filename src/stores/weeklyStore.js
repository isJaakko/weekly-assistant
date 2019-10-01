import { action, observable } from 'mobx';

const defaultWeeklyItem = {};

class WeeklyStore {
  /**
   * observable
   */

  // 列表
  @observable list = [];

  // 更新内容
  @observable formInfo = {
    weekly: {}
  };

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
    this.list = [
      ...this.list,
      {
        ...defaultWeeklyItem,
        parentId
      }
    ];
  }

  // 删除列表项
  @action deleteWeeklyItem(id) {
    this.list = this.list.filter(item => item.id !== id) || [];
  }

  // 更新列表数据
  @action updateList(id) {
    this.list = this.list.map((item) => {
      if (item.id === id) {
        return { ...this.formInfo.weekly };
      }
      return { ...item };
    }) || [];
  }

  // 获取根节点
  @action getRoot() {
    this.list.filter(item => item.id === -1);
  }

  // 包装数据成树形结构
  @action renderTree() {
    let result = [];

    // eslint-disable-next-line
    this.getRoot(this.list).map((item) => {
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
    this.list.map((item) => {
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
