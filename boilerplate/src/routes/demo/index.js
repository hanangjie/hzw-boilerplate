import React from 'react';
import { connect } from 'react-redux';

export default class Demo extends React.Component {
  render() {
    const a =import('./demo2.js')
    console.log(a);
    return <h1 >is demo, {this.props.name}</h1>;
  }
}