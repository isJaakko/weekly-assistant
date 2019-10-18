import React from 'react';

const handleSource = (source) => {
  return source;
};

export default (props) => {
  const source = props.children[0].props.value;

  return (
    <li>
      {handleSource(source)}
    </li>
  );
};
