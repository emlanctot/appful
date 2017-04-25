import React, { Component } from 'react';
import SiteTile from '../components/SiteTile';
import AllReviews from '../components/AllReviews';

class SiteShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      site: {},
      reviews: [],
      data: {},
      admins: [],
      current_user: '',
      overall_rating: '',
      user_id: 0,
      site_id: '',
      votes: 0,
      design_body: '',
      usability_body: '',
      concept_body: ''
    }

    this.handleDelete = this.handleDelete.bind(this)
  }

  componentDidMount() {
    this.getSiteData();
    this.getReviewData();
    this.getUserData();
  }


  getUserData() {
    fetch(`/api/v1/users`, {credentials: 'same-origin'})
    .then(response => response.json())
    .then(responseData => {
      this.setState({
        data: responseData,
        admins: [...this.state.admins, responseData.admins],
        current_user: responseData.current_user
      });
    });
  }

  componentWillReceiveProps(nextProps) {
      this.setState({current_user: nextProps.current_user});
   }

  getSiteData() {
    let siteId = this.props.params.id
    fetch(`/api/v1/sites/${siteId}`, {
      method: 'GET',
      credentials: 'include'
    })
    .then(response => response.json())
    .then(responseData => {
      this.setState({ site: responseData })
    });
  }

  handleDelete() {
    console.log("Site deleted")
    let siteId = this.props.params.id;
    fetch(`/api/v1/sites/${siteId}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" }
    })
  }

  getReviewData() {
    let siteId = this.props.params.id;
    fetch(`/api/v1/sites/${siteId}/reviews`)
      .then(response => response.json())
      .then(responseData => {
        this.setState({ reviews: responseData })
      })
  }

  render() {

    return(
      <div>
      <div className="column row">
        <SiteTile
          handleDelete = {this.handleDelete}
            key = {this.state.site.id}
            id = {this.state.site.id}
            name = {this.state.site.name}
            url = {this.state.site.url}
            description = {this.state.site.description}
            collaborators = {this.state.site.collaborators}
            github_url = {this.state.site.github_url}
            experience = {this.state.site.experience}
            admins = {this.state.admins}
            current_user = {this.state.current_user}
          />
        </div>
        <div className="column row">
          <AllReviews
            reviews = {this.state.reviews}
          />
        </div>
      </div>
    )
  }
}

export default SiteShowContainer;
