import React, { Component } from 'react';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';

class Root extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  render() {
    return(
      <Router history={browserHistory}>
        <Route path="/" component={NavContainer}>
          <IndexRoute component={IndexContainer} />
          <Route path='sites' component={ShowContainer} />
          <Route path='sites/:id' component={ShowContainer} />
        </Route>
      </Router>
    )
  }
}

export default Root
