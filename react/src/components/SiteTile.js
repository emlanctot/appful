import React from 'react'
import { Link } from 'react-router';

const SiteTile = (props) => {
  return(
    <div className="small-12 large-6 columns site-tile">

        <h3> <Link to={`/sites/${props.id}`}>{props.name}</Link> </h3>
        <img src="${props.image}" width="400"/>
        <p> URL: <a href="${props.url}">{props.url}</a> </p>
        <p> {props.description} </p>
        <Link to='/'> <button type="button" onClick={props.handleDelete}>Delete This Site</button> </Link>

    </div>
  )
}

export default SiteTile
