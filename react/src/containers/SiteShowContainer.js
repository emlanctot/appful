import React, { Component } from 'react';
import SiteTile from '../components/SiteTile';
import AllReviews from '../components/AllReviews';
import NewReviewForm from '../components/NewReviewForm';

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

    this.handleDelete = this.handleDelete.bind(this);
    this.handleRatingChange = this.handleRatingChange.bind(this);
    this.handleDesignChange = this.handleDesignChange.bind(this);
    this.handleUsabilityChange = this.handleUsabilityChange.bind(this);
    this.handleConceptChange = this.handleConceptChange.bind(this);
  }

  componentDidMount() {
    this.getSiteData();
    this.getReviewData();
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

  handleRatingChange(event) {
    this.setState({ overall_rating: event.target.value })
  }

  handleUsabilityChange(event) {
    this.setState({ usability_body: event.target.value })
  }

  handleDesignChange(event) {
    this.setState({ design_body: event.target.value })
  }

  handleConceptChange(event) {
    this.setState({ concept_body: event.target.value })
  }

  handleReviewSubmit(event) {
    event.preventDefault();
    let reviewPayload = {
      overall_rating: this.state.overall_rating,
      user_id: this.state.user_id,
      site_id: this.state.site_id,
      design_body: this.state.design_body,
      usability_body: this.state.usability_body,
      concept_body: this.state.concept_body
    }
    console.log(reviewPayLoad)

  }
  debugger;
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
          />
        </div>
        <div className="column row">
          <AllReviews
            reviews = {this.state.reviews}
          />
        </div>
        <div className="column row">
          <NewReviewForm
            rating = {this.state.overall_rating}
            design = {this.state.design_body}
            usability = {this.state.usability_body}
            concept = {this.state.concept_body}

            ratingChange = {this.handleRatingChange}
            designChange = {this.handleDesignChange}
            usabilityChange = {this.handleUsabilityChange}
            conceptChange = {this.handleConceptChange}

            handleReviewSubmit = {this.handleReviewSubmit}
          />
        </div>
      </div>
    )
  }
}

export default SiteShowContainer;
