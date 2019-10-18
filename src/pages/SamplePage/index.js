import React from 'react';
import { inject, observer } from 'mobx-react';
import ReactMarkdown from '_src/components/WeeklyMarkdown';
import './index.less';

const sample = `

  ### 语法

  你可以使用markdown来编写周报

  例如，输入：
  \`\`\`
  # 核心工作要点
  ## OK Engine
  1. xxxxx
  2. xxxxx
  \`\`\`

  你将得到以下输出：

  # 核心工作要点
  ## OK Engine
  1. xxxxx
  2. xxxxx

  ## title
`;

@inject('markdownStore')
@observer
export default class MarkdownWeekly extends React.Component {
  render() {
    return (
      <div className="sample-wrap">
        <ReactMarkdown source={sample} />
      </div>
    );
  }
}
