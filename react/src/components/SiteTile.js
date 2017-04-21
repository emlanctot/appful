import React from 'react'
import { Link } from 'react-router';

const SiteTile = (props) => {
  return(
    <div className="column row">
      <h3> <Link to={`/sites/${props.id}`}>{props.name}</Link> </h3>
      <img src="https://idagram.files.wordpress.com/2012/12/skjermbilde-2012-12-09-kl-17-38-00.png" width="400"/>
      <p> URL: <a href="${props.url}">{props.url}</a> </p>
      <p> {props.description} </p>
      <Link to='/'> <button type="button" onClick={props.handleDelete}>Delete This Site</button> </Link>
    </div>
  )
}

export default SiteTile
