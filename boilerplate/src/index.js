import React from 'react';
import ReactDom from 'react-dom';
import { Router, hashHistory } from 'react-router';
import routes from './router';

ReactDom.render(
  <Router history={hashHistory} routes={routes} />,
  document.getElementById('root')
);