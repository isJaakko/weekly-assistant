import React from 'react';
import { withRouter } from 'react-router-dom';
import { Button } from 'antd';
import { inject, observer } from 'mobx-react';
import CodeMirrorEditor from '_src/components/CodeMirrorEditor';
import Preview from '_src/components/Preview';
import './index.less';

@withRouter
@inject('markdownStore')
@observer
export default class MarkdownWeekly extends React.Component {
  componentDidMount() {
    const { markdownStore } = this.props;

    markdownStore.useDemo();
  }

  toEditor = () => {
    this.props.history.push('/markdown');
  }

  render() {
    const { markdownStore } = this.props;
    const { mdText } = markdownStore;

    return (
      <div className="sample-wrap">
        <div className="tool-bar">
          <Button onClick={this.toEditor}>返回编辑</Button>
        </div>
        <div className="flex">
          <CodeMirrorEditor
            value={mdText}
            onBeforeChange={(editor, data, value) => {
              markdownStore.updateDemoText(value);
            }}
          />
          <Preview
            className="sample-weekly-preview"
            source={mdText}
          />
        </div>
      </div>
    );
  }
}
