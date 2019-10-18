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
      <div
        className={
          isAlarmValue(value)
            ? 'template-alarm-title-level-1' : 'template-title-level-1'
        }
      >
        {children[0]}
      </div>
    );
  }
  if (level === 2) {
    return <div className="template-title-level-2">{children[0]}</div>;
  }

  return <h3>{children[0]}</h3>;
};
