import React from 'react';
import { inject, observer } from 'mobx-react';
import { Controlled as CodeMirror } from 'react-codemirror2';

require('codemirror/lib/codemirror.css');
require('codemirror/theme/material.css');
require('codemirror/theme/neat.css');
require('codemirror/mode/xml/xml.js');
require('codemirror/mode/javascript/javascript.js');


@inject('markdownStore')
@observer
export default class CodeMirrorEditor extends React.Component {
  onChange = (editor, value) => {
    const { markdownStore } = this.props;
    markdownStore.updateMdText(value);
  }

  render() {
    const { markdownStore } = this.props;
    const { mdText } = markdownStore;

    return (
      <div>
        <CodeMirror
          value={mdText}
          options={{
            mode: 'xml',
            theme: 'material',
            lineNumbers: true
          }}
          onBeforeChange={(editor, data, value) => {
            markdownStore.updateMdText(value);
          }}
        />
      </div>
    );
  }
}
