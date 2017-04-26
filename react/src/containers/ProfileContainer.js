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
        <div className="row" id="user-profile-area">

            <div className="small-6 large-6 columns" id="avatar-area">
              <img src={this.state.avatar} id="avatar" width="200"/>
            </div>

            <div className="small-6 large-6 columns" id="info-area">
              <h3> @{this.state.user.username}</h3>
              <h5> {this.state.user.city}, {this.state.user.state} </h5>
            </div>

        </div>

          <AllSites
            sites = {this.state.sites}
          />

      </div>

    )
  }
}

export default ProfileContainer
