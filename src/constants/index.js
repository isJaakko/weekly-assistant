const rootId = -1;

const MAX_LEVEL = 2;

const Template = [
  {
    id: 'core',
    parentId: rootId,
    level: 1,
    type: 'normal',
    title: '核心工作要点',
    show: true,
  }, {
    id: 'malfunction',
    parentId: rootId,
    level: 1,
    type: 'alarm',
    title: '本周问题/故障',
    show: true,
  }, {
    id: 'detail',
    parentId: rootId,
    level: 1,
    type: 'normal',
    title: '详细进展',
    show: true,
  }, {
    id: 'growing',
    parentId: rootId,
    level: 1,
    type: 'normal',
    title: '个人成长',
    show: true,
  }, {
    id: 'plan',
    parentId: rootId,
    level: 1,
    type: 'normal',
    title: '下周计划',
    show: true,
  },
];

const MarkdownTemplate = '# 核心工作要点\n# 本周问题/故障\n# 详细进展\n# 个人成长\n# 下周计划\n';

export default {
  rootId, MAX_LEVEL, Template, MarkdownTemplate
};
