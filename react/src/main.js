import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root'
import ShowContainer from './containers/ShowContainer'

$(function() {
  ReactDOM.render(
    <Root />,
    document.getElementById('app')
  );
});



$(function() {
  if (document.getElementById('app')) {
    ReactDOM.render(
      <Root />,
      document.getElementById('app')
    );
  };
  if (document.getElementById('site-show')) {
    ReactDOM.render(
      <ShowContainer />,
      document.getElementById('site-show')
    );
  }
});
