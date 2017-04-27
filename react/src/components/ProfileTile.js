import React from 'react'
import { Link } from 'react-router';

const ProfileTile = (props) => {

  return(
    <div className="small-12 large-6 columns profile-tile">

      <h3> @{props.username}</h3>
      <img src={props.avatar} height="75" width="75"/>

    </div>
  )
}

export default ProfileTile
