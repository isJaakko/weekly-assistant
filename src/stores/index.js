import WeeklyStore from './weeklyStore';
import MarkdownStore from './markdownStore';

class Store {
  constructor() {
    this.weeklyStore = new WeeklyStore(this);
    this.markdownStore = new MarkdownStore(this);
  }
}
export default new Store();
