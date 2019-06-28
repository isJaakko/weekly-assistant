import React, { Component } from 'react';
import styles from './index.less';

export default class Test extends Component {
  render() {
    console.log(styles);
    return (<h1 className={styles.testTitle}>Test Component!</h1 >);
  }
};