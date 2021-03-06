import React, { Component } from 'react';
import SiteTile from '../components/SiteTile';
import AllReviews from '../components/AllReviews';
import NewReviewForm from '../components/NewReviewForm';

class SiteShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: {},
      site: {},
      reviews: [],
      data: {},
      overall_rating: '',
      site_id: '',
      votes: 0,
      design_body: '',
      usability_body: '',
      concept_body: '',
      formToggle: false,
      vote_count: 0
    }
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleFormButtonClick = this.handleFormButtonClick.bind(this);
    this.handleRatingChange = this.handleRatingChange.bind(this);
    this.handleDesignChange = this.handleDesignChange.bind(this);
    this.handleConceptChange = this.handleConceptChange.bind(this);
    this.handleUsabilityChange = this.handleUsabilityChange.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.getSiteData();
    this.getReviewData();
  }

  getSiteData() {
    let siteId = this.props.params.id
    fetch(`/api/v1/sites/${siteId}`, {
      method: 'GET'
    })
    .then(response => response.json())
    .then(responseData => {
      this.setState({ site: responseData })
    });
  }

  getReviewData() {
    let siteId = this.props.params.id
    fetch(`/api/v1/sites/${siteId}/reviews`, {
      method: 'GET'
    })
    .then(response => response.json())
    .then(responseData => {
      this.setState({ reviews: responseData })
    });
  }

  handleDelete() {
    let siteId = this.props.params.id;
    fetch(`/api/v1/sites/${siteId}`, {
      credentials: "same-origin",
      method: "DELETE",
      headers: { "Content-Type": "application/json" }
    })
  }

  handleFormButtonClick() {
    if (this.state.formToggle == false) {
      this.setState({
        formToggle: true,
      })
    } else {
      this.setState({
        formToggle: false,
      })
    }
  }
  handleRatingChange(event) {
    this.setState({ overall_rating: event.target.value });
  }

  handleDesignChange(event) {
    this.setState({ design_body: event.target.value });
  }

  handleUpdate(site) {
    let siteId = this.props.params.id;
    fetch(`/api/v1/sites/${siteId}`, {
      method: "PUT",
      data: { site: site }
    })
  }

  handleUsabilityChange(event) {
    this.setState({ usability_body: event.target.value });
  }

  handleConceptChange(event) {
    this.setState({ concept_body: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    let reviewPayload = {
      overall_rating: this.state.overall_rating,
      concept_body: this.state.concept_body,
      design_body: this.state.design_body,
      usability_body: this.state.usability_body
    }
    this.sendInput(reviewPayload);
    this.getReviewData();
    this.handleClearForm();
  }

  sendInput(reviewPayload) {
    let siteId = this.props.params.id;
    fetch(`/api/v1/sites/${siteId}/reviews`, {
      credentials: "same-origin",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(reviewPayload)
    })
    .then(response => response.json())
    .then(responseData => {
      this.setState({ reviews: [...this.state.reviews, responseData] });
    });
  }

  handleClearForm() {
    this.setState({
      user_id: 0,
      overall_rating: '',
      concept_body: '',
      design_body: '',
      usability_body: ''
    });
  }


  render() {
    let className;
    if (this.state.formToggle) {
      className = 'selected';
    } else {
      className = 'hidden';
    }
    return(
      <div>
      <div className="row">
        <SiteTile
            handleDelete = {this.handleDelete}
            handleUpdate = {this.handleUpdate}

            key = {this.state.site.id}
            id = {this.state.site.id}
            name = {this.state.site.name}
            url = {this.state.site.url}
            description = {this.state.site.description}
            collaborators = {this.state.site.collaborators}
            github_url = {this.state.site.github_url}
            experience = {this.state.site.experience}
            image = {this.state.site.image}
          />
        </div>

      <div className="column row">
        <NewReviewForm
          className = {className}
          handleFormButtonClick = {this.handleFormButtonClick}
          userValue = {this.state.user_id}
          ratingValue = {this.state.overall_rating}
          designValue = {this.state.design_body}
          usabilityValue = {this.state.usability_body}
          conceptValue = {this.state.concept_body}

          ratingChange = {this.handleRatingChange}
          userChange = {this.handleUserIdChange}
          designChange = {this.handleDesignChange}
          usabilityChange = {this.handleUsabilityChange}
          conceptChange = {this.handleConceptChange}

          handleSubmit = {this.handleSubmit}
        />
      </div>

        <div className="column row review-area">
          <AllReviews
            reviews = {this.state.reviews}
          />
        </div>
      </div>
    )
  }
}

export default SiteShowContainer;
