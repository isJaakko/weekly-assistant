import React from 'react';

export default (props) => {
  console.log(props.children[0]);

  return (
    <li>
      {props.children}
    </li>
  );
};
