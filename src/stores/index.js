import WeeklyStore from './weeklyStore';

class Store {
  constructor() {
    this.weeklyStore = new WeeklyStore(this);
  }
}
export default new Store();
