import React from 'react';

const handleSource = (source, index, length) => {
  let result = source.replace(/^/, `${index}、`);
  const pattern = /[;；.。]*$/;

  if (!source) {
    return result;
  }

  if (pattern.test(source)) {
    result = result.replace(pattern, index < length ? '；' : '。');
    return result;
  }

  result = result.replace(/$/, index < length ? '；' : '。');
  return result;
};

export default ({ children }) => {
  return (
    <div>
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
    </div>
  );
};
