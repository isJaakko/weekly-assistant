import WeeklyStore from './weeklyStore';

class Store {
  constructor() {
    this.articleStore = new WeeklyStore(this);
  }
}
export default new Store();
