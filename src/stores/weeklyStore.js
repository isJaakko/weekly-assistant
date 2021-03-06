import { action, computed, observable } from 'mobx';
import constants from '_src/constants';
import template from '_src/constants/template';
import { globalMessage } from '_src/utils';
import Storage from '_src/utils/storage';

const { ROOT_ID, MAX_LEVEL } = constants;
const { Template } = template;

const defaultWeeklyItem = {
  title: '',
  show: true,
  children: [],
};

class WeeklyStore {
  /**
   * observable
   */

  // 列表
  @observable weeklyList = Storage.get('weeklyList') || Template;

  // 更新内容
  @observable formInfo = {
    weekly: {}
  };

  /**
   * computed
   */
  @computed get weeklyTree() {
    Storage.set('weeklyList', this.weeklyList);
    return this.renderTree() || [];
  }

  /**
   * action
   */
  @action clearWeeklyList() {
    this.weeklyList = Template;
    Storage.set('weeklyList', this.weeklyList);
  }

  // 更新表单数据
  @action updateFormInfo(object, key, value, id) {
    this.formInfo[object] = {
      ...this[object],
      [key]: value
    };
    this.updateList(id);
  }

  // 新增列表项
  @action addWeeklyItem(parentId) {
    const parentNode = this.getParentNode(parentId) || { level: ROOT_ID + 1 };
    const { level } = parentNode;
    if (level > MAX_LEVEL) {
      return globalMessage('warning', '无法添加下级');
    }

    this.weeklyList = [
      ...this.weeklyList,
      {
        ...defaultWeeklyItem,
        id: `${parentId}_${this.weeklyList.length}`,
        parentId,
        level: level + 1,
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
        return {
          ...item,
          ...this.formInfo.weekly
        };
      }

      return { ...item };
    });
  }

  // 获取父节点：若该节点本身为根节点，则返回-1
  @action getParentNode(parentId) {
    const arr = this.weeklyList.filter(item => item.id === parentId);
    if (arr.length === 0) {
      return false;
    }
    return arr[0];
  }

  // 获取子节点
  @action getChildren(id) {
    return this.weeklyList.filter(item => item.parentId === id);
  }

  // 获取根节点
  @action getRoot() {
    return this.weeklyList.filter(item => item.parentId === ROOT_ID);
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
          key: item.id,
          children: this.renderChildren(item)
        }
      ];
    });

    return result;
  }

  // 配合 renderTree 使用
  @action renderChildren(node) {
    const children = [];

    // eslint-disable-next-line
    this.weeklyList.map((item) => {
      if (item.parentId === node.id) {
        children.push({
          ...item,
          key: item.id,
          children: this.renderChildren(item)
        });
      }
    });

    return children;
  }
}

export default WeeklyStore;
