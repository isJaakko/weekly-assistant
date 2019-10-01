import { observable, action, computed } from 'mobx';

class ArticleStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  /**
   * observable
   */
  @observable article = [];

  /**
   * action
   */
  // 添加文章
  @action addArticle(article) {
    this.article = [
      ...this.article,
      ...article
    ];
    // console.log([...this.article]);
  }

  // 处理文章数据
  @action handleArticle() {

  }
}
export default ArticleStore;