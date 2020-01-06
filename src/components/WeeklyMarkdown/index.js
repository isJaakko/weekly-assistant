import React from 'react';
import ReactMarkdown from 'react-markdown';
import Heading from './Renderers/Heading';
import List from './Renderers/List';
// import CodeBlock from './Renderers/CodeBlock';
import './index.less';

export default ({ source, className = '' }) => {
  return (
    <div className={`react-markdown ${className}`}>
      <ReactMarkdown
        source={source}
        renderers={{
          heading: Heading,
          list: List,
          // code: CodeBlock
        }}
      />
    </div>
  );
};
