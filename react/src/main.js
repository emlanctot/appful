import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import IndexContainer from './containers/IndexContainer'

$(function() {
  ReactDOM.render(
    <IndexContainer />,
    document.getElementById('app')
  );
});
