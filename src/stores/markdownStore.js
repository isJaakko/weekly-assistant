import { action, observable } from 'mobx';
import Constants from '_src/constants';
import TemplateConstants from '_src/constants/template';
import Storage from '_src/utils/storage';

const { MarkdownTypeEnum } = Constants;
const { MarkdownTemplate, TlMarkdownTemplate, DemoMarkdownTemplate } = TemplateConstants;
const TemplateMap = {
  [MarkdownTypeEnum.common]: MarkdownTemplate,
  [MarkdownTypeEnum.tl]: TlMarkdownTemplate,
  [MarkdownTypeEnum.demo]: DemoMarkdownTemplate
};

class MarkdownStore {
  constructor() {
    const keys = Object.keys(MarkdownTypeEnum);

    keys.forEach((key) => {
      const mdKey = MarkdownTypeEnum[key];

      if (!Storage.get(mdKey)) {
        Storage.set(mdKey, TemplateMap[mdKey]);
      }
    });
  }

  /**
   * observable
   */
  // 当前模板类型
  @observable markdownType = MarkdownTypeEnum.common;

  // 个人周报模板
  @observable mdText = Storage.get(MarkdownTypeEnum.common) || MarkdownTemplate;

  // TL 周报模板
  @observable tlMdText = Storage.get(MarkdownTypeEnum.tl) || TlMarkdownTemplate;

  // Demo 周报模板
  @observable demoMdText = Storage.get(MarkdownTypeEnum.demo) || DemoMarkdownTemplate;

  /**
   * action
   */
  // 切换 Markdown 模式
  @action updateMarkdownType(markdownType = MarkdownTypeEnum.common) {
    this.markdownType = markdownType;

    this[markdownType] = Storage.get(markdownType);
  }

  // 清除当前周报 恢复默认
  @action.bound clearWeekly() {
    const { markdownType } = this;

    Storage.set(markdownType, TemplateMap[markdownType]);
    this[markdownType] = Storage.get(markdownType);
  }

  // 更新 Markdown
  @action.bound updateMdText(text) {
    const { markdownType } = this;

    this[markdownType] = text;
    Storage.set(markdownType, text);
  }
}

export default MarkdownStore;
