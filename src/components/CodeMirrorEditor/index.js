import React from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';
import './index.less';

require('codemirror/lib/codemirror.css');
require('codemirror/theme/material.css');
require('codemirror/theme/neat.css');
require('codemirror/mode/xml/xml.js');
require('codemirror/mode/javascript/javascript.js');

export default function CodeMirrorEditor({
  value, onBeforeChange, className = ''
}) {
  return (
    <div
      className={`markdown-editor-wrap ${className}`}
    >
      <CodeMirror
        value={value}
        options={{
          theme: 'material',
          lineNumbers: true
        }}
        onBeforeChange={onBeforeChange}
      />
    </div>
  );
}
