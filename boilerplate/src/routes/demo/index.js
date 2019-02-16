import React from 'react';
import { dynamic } from 'root/utils/dynamic'


import styles from './demo.less';

function a(t) {
  return dynamic(t);
}

export default class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      path: 'demo/demo1'
    }
  }
  changeDemo(v) {
    this.setState({
      path: v.target.value
    })
  }
  render() {
    const A = a(() => import(`root/routes/${this.state.path}`))
    return <div className={styles.index}>
      <input onChange={(e) => this.changeDemo(e)} />
      is demo3,
      <A >{this.props.name}</A>
    </div>;
  }
}