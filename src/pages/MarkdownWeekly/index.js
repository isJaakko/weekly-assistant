import React from 'react';
import { inject, observer } from 'mobx-react';
import Editor from './CodeMirror';
import Preview from './Preview';
import './index.less';

@inject('weeklyStore')
@observer
export default class Weekly extends React.Component {
  render() {
    return (
      <div className="flex weekly-wrap">
        <Editor />
        <Preview />
      </div>
    );
  }
}
