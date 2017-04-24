import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import IndexContainer from './containers/IndexContainer';


$(function() {
  if (document.getElementById('app')) {
    ReactDOM.render(
      <IndexContainer user={document.getElementById('app').dataset.user} />,
      document.getElementById('app')
    );
  };
});
