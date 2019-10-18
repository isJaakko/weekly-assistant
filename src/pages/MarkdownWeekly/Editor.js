import React from 'react';
import { inject, observer } from 'mobx-react';
import { Form } from 'antd';
import CodeMirror from './CodeMirror';
import './Editor.less';

@inject('markdownStore')
@observer
class Editor extends React.Component {
  onChange = (e) => {
    const { markdownStore } = this.props;
    markdownStore.updateMdText(e.target.value);
  }

  render() {
    const { markdownStore } = this.props;
    const { mdText } = markdownStore;

    return (
      <div className="markdown-editor-wrap">
        <CodeMirror value={mdText} />
      </div>
    );
  }
}
export default Form.create({})(Editor);
