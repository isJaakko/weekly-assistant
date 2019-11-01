import { action, observable } from 'mobx';
import template from '_src/constants/template';
import Storage from '_src/utils/storage';

const { MarkdownTemplate, MarkdownDemoTemplate } = template;

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

  @action updateDemoText(text) {
    this.mdText = text;
    // Storage.set('mdText', text);
  }

  // 使用 Markdown Demo
  @action useDemo() {
    this.mdText = MarkdownDemoTemplate;
    Storage.set('mdDemoText', MarkdownDemoTemplate);
  }

  // 使用用户数据
  @action useCustomer() {
    this.mdText = Storage.get('mdText');
  }
}

export default MarkdownStore;
