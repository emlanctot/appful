import React from 'react'
import { Link } from 'react-router';
import Thumbnail from 'react-thumbnail';

const SiteTile = (props) => {
  return(
    <div className="small-12 large-6 columns site-tile">

    <Thumbnail width={250}
             height={250}
             page="https://facebook.github.io/react/docs/getting-started.html"
             scale={4} />

        <h3> <Link to={`/sites/${props.id}`}>{props.name}</Link> </h3>
        <embed src="http://farmalarm.herokuapp.com/" height="275px" width="475px"/>
        <iframe sandbox src="http://farmalarm.herokuapp.com/" id="iframe-box" height="275px" width="475px"></iframe>
        <p> URL: <a href="${props.url}">{props.url}</a> </p>
        <p> {props.description} </p>
        <Link to='/'> <button type="button" onClick={props.handleDelete}>Delete This Site</button> </Link>

    </div>
  )
}

export default SiteTile
