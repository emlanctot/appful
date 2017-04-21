import React, { Component } from 'react';
import SiteTile from '../components/SiteTile';
import AllReviews from '../components/AllReviews';

class SiteShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      site: {},
      reviews: [],
      overall_rating: '',
      user_id: 0,
      site_id: '',
      votes: 0,
      design_body: '',
      usability_body: '',
      concept_body: ''
    }

  }

  componentDidMount() {
    this.getSiteData();
    this.getReviewData();
  }

  getSiteData() {
    let siteId = this.props.params.id;
    fetch(`/api/v1/sites/${siteId}`)
      .then(response => response.json())
      .then(responseData => {
        this.setState({ site: responseData })
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

  // handleReviewSubmit(event) {
  //   event.preventDefault();
  //     let sitePayload = {
  //       overall_rating: this.state.overall_rating,
  //       user_id: this.state.user_id,
  //       site_id: this.state.site_id,
  //       votes: this.state.votes,
  //       design_body: this.state.design_body,
  //       usability_body: this.state.usability_body,
  //       concept_body: this.state.concept_body
  //     }
  //     this.sendInput(sitePayload)
  //     this.getData()
  //     this.handleClearForm()
  // }

  render() {
    debugger;
    return(
      <div>
        <div>
          <SiteTile
            key = {this.state.site.id}
            id = {this.state.site.id}
            name = {this.state.site.name}
            url = {this.state.site.url}
            description = {this.state.site.description}
            collaborators = {this.state.site.collaborators}
            github_url = {this.state.site.github_url}
            experience = {this.state.site.experience}
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
