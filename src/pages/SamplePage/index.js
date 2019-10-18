import React from 'react';
import { withRouter } from 'react-router-dom';
import { Button } from 'antd';
import { inject, observer } from 'mobx-react';
import ReactMarkdown from '_src/components/WeeklyMarkdown';
import './index.less';

const sample = `
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

@withRouter
@inject('markdownStore')
@observer
export default class MarkdownWeekly extends React.Component {
  toEditor = () => {
    this.props.history.push('/markdown');
  }

  render() {
    return (
      <div className="sample-wrap">
        <div className="tool-bar">
          <Button onClick={this.toEditor}>返回编辑</Button>
        </div>
        <ReactMarkdown source={sample} />
      </div>
    );
  }
}
