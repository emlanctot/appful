import React, { Component } from 'react';
import { Link } from 'react-router';
import AllSites from '../components/AllSites';
import ProfileTile from '../components/ProfileTile';

class ProfileContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      user: {},
      sites: [],
      avatar: ''
    }
  }

  componentDidMount() {
    this.getUserData();
  }

  getUserData() {
    fetch(`/api/v1/profiles`, { credentials: 'same-origin' })
      .then(response => response.json())
      .then(responseData => {
        this.setState({ user: responseData.user, sites: responseData.sites, avatar: responseData.avatar })
    });
  }

  render() {

    return(
      <div>

          <center>
          <div>
          <h3> @{props.username}</h3>
          <img src={props.avatar} height="75" width="75"/>
          </div>
          </center>

          <center>
          <div>
            <AllSites
              sites = {this.state.sites}
            />
          </div>
          </center>


      </div>

    )
  }
}

export default ProfileContainer
