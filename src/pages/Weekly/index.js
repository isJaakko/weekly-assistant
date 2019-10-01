import React from 'react';
import { inject, observer } from 'mobx-react';

@inject('weeklyStore')
@observer
export default class Weekly extends React.Component {
  render() {
    return (
      <div />
    );
  }
}
