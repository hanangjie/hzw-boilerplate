import React from 'react'
import { connect } from 'react-redux'
import { setName } from 'Actions/demo';

@connect(state => ({
  name: state.demo.name,
}))
export default class Demo extends React.Component {
  changeName() {
    this.props.dispatch(setName({name:'a'}));
  }
  render() {
    return <h1 onClick={() => this.changeName()}>is demo2, {this.props.name}</h1>;
  }
}