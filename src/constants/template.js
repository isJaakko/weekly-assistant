import Index from './index';

const { rootId } = Index;

const Template = [
  {
    id: 'core',
    parentId: rootId,
    level: 1,
    type: 'normal',
    title: '核心工作要点：',
    show: true,
  }, {
    id: 'malfunction',
    parentId: rootId,
    level: 1,
    type: 'alarm',
    title: '本周问题/故障：',
    show: true,
  }, {
    id: 'detail',
    parentId: rootId,
    level: 1,
    type: 'normal',
    title: '详细进展：',
    show: true,
  }, {
    id: 'growing',
    parentId: rootId,
    level: 1,
    type: 'normal',
    title: '个人成长：',
    show: true,
  }, {
    id: 'plan',
    parentId: rootId,
    level: 1,
    type: 'normal',
    title: '下周计划：',
    show: true,
  },
];

const MarkdownTemplate = '# 核心工作要点：\n# 本周问题/故障：\n# 详细进展：\n# 个人成长：\n# 下周计划：\n';

const MarkdownDemoTemplate = `# 核心工作要点：
## USDT保证金合约：
1. 交割/永续USDT合约测试问题修复，已完成
2. USDT行情图表模块，已提测（10.10）
3. 行情图表大数据重构，已提测（10.10）

# 本周问题/故障：
1. 无

# 详细进展：
## USDT交割合约：
1. 修复货币列表传参方式，已完成（10.09）
2. 更换 market链接跳转，已完成（10.09）
3. 修复货币列表传参方式，已完成（10.09）
4. 修复挂单列表保证金计算方法，已完成（10.11）

# 个人成长：
1. 补充Java相关知识
2. google seo相关知识补充
3. 参加《用户粘性设计》分享

# 下周计划：
1. 交割USDT保证金合约模拟盘及永续合约过渡需求联调并提测
2. 修复交割/永续合约USDT保证金合约测试问题
3. 优化多语言系统
`;

const Document = `
### 关于语法
你可以使用markdown来编写周报

用到的语法如下：\n
\`#\`：一级标题\n
\`##\`：二级标题\n
\`[数字].[空格][内容]\`\n：表示列表，无需填写标点符号，自动添加。例如：\`1. 内容一\`

例如，输入：
\`\`\`
# 核心工作要点
## OK Engine
1. x1x1x1
2. x2x2x2

# 本周问题/故障
1. 无
\`\`\`

你将得到以下输出：

# 核心工作要点
## OK Engine
1. x1x1x1
2. x2x2x2

# 本周问题/故障
1. 无

### 关于层级
目前周报只支持两级标题

### 关于样式
不支持自定义样式，给定默认样式。

普通一级标题颜色为 \`#0070C0\`。

特殊情况：若一级标题内容为“本周问题/故障”，则颜色为 \`#FF0000\`。

### 关于缓存
使用 \`localStorage\` 缓存，若非手动清除，数据可持久保存。
`;


export default {
  Template, MarkdownTemplate, MarkdownDemoTemplate, Document
};
