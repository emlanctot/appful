import React, { Component } from 'react';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import NavContainer from './containers/NavContainer';
import IndexContainer from './containers/IndexContainer';
import SiteShowContainer from './containers/SiteShowContainer';

const Root = () => {
  return(
      <Router history={browserHistory}>
        <Route path="/" component={NavContainer}>
          <IndexRoute component={IndexContainer}/>
          <Route path='sites' component={SiteShowContainer} />
          <Route path='sites/:id' component={SiteShowContainer} />
        </Route>
      </Router>
    )
  }

export default Root;
