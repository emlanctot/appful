import React from 'react'

const SiteTile = (props) => {
  return(
    <div>
      <h3> {props.name} </h3>
      <img src="https://idagram.files.wordpress.com/2012/12/skjermbilde-2012-12-09-kl-17-38-00.png" width="400"/>
      <p> URL: <a href="${props.url}">{props.url}</a> </p>
      <p> {props.description} </p>
    </div>
  )
}

export default SiteTile
