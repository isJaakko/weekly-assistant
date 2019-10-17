import { action, observable } from 'mobx';
// import { globalMessage } from '_src/utils';
import constants from '_src/constants';
import Storage from '_src/utils/storage';

const { MarkdownTemplate } = constants;

class MarkdownStore {
  /**
   * observable
   */
  @observable mdText = Storage.get('mdText') || MarkdownTemplate;

  /**
 * action
 */
  @action clearWeeklyList() {
    this.mdText = MarkdownTemplate;
    Storage.set('mdText', this.mdText);
  }

  // 更新 Markdown
  @action updateMdText(text) {
    this.mdText = text;
    Storage.set('mdText', text);
  }
}

export default MarkdownStore;
