import React from 'react'
import { connect } from 'react-redux'
import { setName } from 'Actions/demo';

import styles from './demo_redux.css';

@connect(state => ({
  name: state.demo.name,
}))
export default class Demo extends React.Component {
  changeName() {
    this.props.dispatch(setName({name:'a23'}));
  }
  render() {
    return <h1 className={styles.index} onClick={() => this.changeName()}>is demo2, {this.props.name}</h1>;
  }
}