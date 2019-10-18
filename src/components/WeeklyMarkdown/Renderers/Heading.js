import React from 'react';

// const alarmValue = ['本周问题/故障', '本周问题', '故障'];

const isAlarmValue = (value) => {
  const pattern = /(本周问题\/故障)|(本周问题)|(故障)/;
  if (pattern.test(value)) {
    return true;
  }
  return false;
};

export default ({ level, children }) => {
  const { value = '' } = children.length
    ? children[0].props : {};

  if (level === 1) {
    return (
      <h1
        className={
          isAlarmValue(value)
            ? 'template-alarm-title-level-1' : 'template-title-level-1'
        }
      >
        {children[0]}
      </h1>
    );
  }
  if (level === 2) {
    return <h2>{children[0]}</h2>;
  }

  return <h3>{children[0]}</h3>;
};
