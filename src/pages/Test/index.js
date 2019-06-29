import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Alert } from "antd";
import styles from './index.less';

// @inject((stores) => {
//   console.log(stores);
//   return {
//     demoStore: stores.demoStore
//   }
// })
@inject('demoStore')
@observer
export default class Test extends Component {
  constructor(props) {
    super(props);

    const { list } = this.props.demoStore;
    this.state = {
      data: list
    }
  }

  render() {
    return (<div className={styles.testTitle}>
      Test Component!
      <Alert message="Success Text" type="success" />
        {this.state.data.map(item => item)}
    </div >);
  }
};