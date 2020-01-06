const ROOT_ID = -1;

const MAX_LEVEL = 2;

const MarkdownTypeEnum = {
  common: 'mdText',
  tl: 'tlMdText',
  demo: 'demoMdText'
};

const EditorModeEnum = {
  base: 'Mode',
  markdown: 'markdown',
  noamel: 'normal'
};

const SourceFromEnum = {
  base: 'SourceFrom',
  demo: 'demo',
  customer: 'customer'
};

export default {
  ROOT_ID,
  MAX_LEVEL,
  MarkdownTypeEnum,
  EditorModeEnum,
  SourceFromEnum
};
