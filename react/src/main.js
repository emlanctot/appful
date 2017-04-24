import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';


$(function() {
  if (document.getElementById('app')) {
    ReactDOM.render(
      <Root user={document.getElementById('app').dataset.user} />,
      document.getElementById('app')
    );
  };
});
