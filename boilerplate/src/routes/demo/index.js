import React from 'react';
import { dynamic } from 'root/utils/dynamic'

import img from 'root/assets/img1.png';
import styles from './demo.less';

function a(t) {
  return dynamic(t);
}

export default class Demo extends React.Component {
  render() {
    return <div className={styles.index}>
      is index,
      <img src={img} />
    </div>;
  }
}