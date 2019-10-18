import React from 'react';
import ReactMarkdown from 'react-markdown';
import Heading from './Renderers/Heading';
// import List from './Renderers/List';
import ListItem from './Renderers/ListItem';
import CodeBlock from './Renderers/CodeBlock';
import './index.less';

export default class Preview extends React.Component {
  render() {
    const { source } = this.props;

    return (
      <div className="markdown-preview-wrap">
        <div
          className="preview-text"
          ref={ref => { this.ref = ref; }}
        >
          <ReactMarkdown
            source={source}
            renderers={{
              heading: Heading,
              listItem: ListItem,
              code: CodeBlock
            }}
          />
        </div>
      </div>
    );
  }
}
