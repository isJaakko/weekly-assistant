import React from 'react';

const isAlarmValue = (value) => {
  const pattern = /本周问题\/故障|本周问题|问题|故障/;
  if (pattern.test(value)) {
    return true;
  }
  return false;
};

const handleValue = (value) => {
  const pattern = /[:：]$/g;

  if (pattern.test(value)) {
    return value.replace(pattern, '：');
  }

  return value.replace(/$/, '：');
};

export default ({ level, children }) => {
  const { value = '' } = children.length
    ? children[0].props : {};
  const result = handleValue(value);

  if (level === 1) {
    return (
      <div
        className={
          isAlarmValue(value)
            ? 'template-alarm-title-level-1' : 'template-title-level-1'
        }
      >
        {result}
      </div>
    );
  }
  if (level === 2) {
    return (
      <div className="template-title-level-2">
        {result}
      </div>
    );
  }

  return <h3>{children[0]}：</h3>;
};
