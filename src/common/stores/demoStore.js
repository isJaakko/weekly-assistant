import { action, observable } from 'mobx';

class DemoStore {
  @observable list = [0];

  @action getList = () => {
    this.list.push(...[1, 2, 3]);
  }
}

export default new DemoStore();