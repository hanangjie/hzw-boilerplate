import React from 'react'
import { Link } from 'react-router';

export default class Welcome extends React.Component {
  render() {
    return <div>Hello, 
      <Link to='/demo' >链接</Link>
      {this.props.default}
    </div>;
  }
}