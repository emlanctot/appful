import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import CrudContainer from './containers/CrudContainer'

$(function() {
  ReactDOM.render(
    <CrudContainer />,
    document.getElementById('app')
  );
});
