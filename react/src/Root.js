import React, { Component } from 'react';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import NavContainer from './containers/NavContainer';
import IndexContainer from './containers/IndexContainer';
import SiteShowContainer from './containers/SiteShowContainer';
import ProfileContainer from './containers/ProfileContainer';

const Root = () => {
  return(
      <Router history={browserHistory}>
        <Route path="/" component={NavContainer}>

          <IndexRoute component={IndexContainer} />
          <Route path='profiles' component={ProfileContainer} />
          <Route path='sites' component={SiteShowContainer} />
          <Route path='users' component={SiteShowContainer} />
          <Route path='sites/:id' component={SiteShowContainer} />
        </Route>
      </Router>
    )
  }

export default Root;
