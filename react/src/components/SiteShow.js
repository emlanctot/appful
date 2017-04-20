import React from 'react';
import { browserHistory, Link } from 'react-router';

const SiteShow = (props) => {
      debugger;
  return(
    <div className="article-show">
      <h2>{props.title}</h2>
      <p>{props.body}</p>
      <div className="button">
        <BackButton />
      </div>
    </div>
  )
}

export default SiteShow;
