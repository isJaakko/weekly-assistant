import React from 'react';

const handleSource = (source, index, length) => {
  if (!source) {
    return '';
  }

  let result = source;
  result = result.replace(/^/, `${index}、`);
  result = result.replace(/$/, index < length ? '；' : '。');
  return result;
};

export default ({ children }) => {
  return (
    <ul>
      {
        children.map((item, index, array) => {
          const { value = '' } = item.props.children.length > 0
            ? item.props.children[0].props : {};

          const result = handleSource(value, index + 1, array.length);

          return (
            <React.Fragment key={`${item.key}-frgm`}>
              <div key={item.key}>{result}</div>
              {
                index === array.length - 1 ? <br /> : null
              }
            </React.Fragment>
          );
        })
      }
    </ul>
  );
};
