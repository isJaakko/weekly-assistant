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
    children: [],
  }, {
    id: 'malfunction',
    parentId: rootId,
    level: 1,
    type: 'alarm',
    title: '本周问题/故障',
    show: true,
    children: []
  }, {
    id: 'detail',
    parentId: rootId,
    level: 1,
    type: 'normal',
    title: '详细进展',
    show: true,
    children: [],
  }, {
    id: 'growing',
    parentId: rootId,
    level: 1,
    type: 'normal',
    title: '个人成长',
    show: true,
    children: [],
  }, {
    id: 'plan',
    parentId: rootId,
    level: 1,
    type: 'normal',
    title: '下周计划',
    show: true,
    children: [],
  },
  {
    id: 'malfunction-child-1',
    parentId: 'malfunction',
    level: 2,
    title: '',
    show: true,
    children: [],
  },
  {
    id: 'malfunction-child-2',
    parentId: 'malfunction-child-1',
    level: 3,
    title: '无',
    show: true,
    children: [],
  }
];

export default { rootId, MAX_LEVEL, Template };
