import React from 'react';
import { connect } from 'react-redux';

export default class Demo extends React.Component {
  render() {
    return <h1 >is demo, {this.props.name}</h1>;
  }
}