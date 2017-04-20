import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';
import SiteShowContainer from './containers/SiteShowContainer';


$(function() {
  if (document.getElementById('app')) {
    ReactDOM.render(
      <Root />,
      document.getElementById('app')
    );
  };
  if (document.getElementById('site-show')) {
    ReactDOM.render(
      <SiteShowContainer />,
      document.getElementById('site-show')
    );
  }
});
