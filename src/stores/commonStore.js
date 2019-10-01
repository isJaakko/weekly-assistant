import { observable, action } from 'mobx';

export default class CommonStore {
  @observable loadingController = {};

  @action handleLoading(key, status) {
    this.loadingController = {
      ...this.loadingController,
      [key]: status,
    };
  }
}
