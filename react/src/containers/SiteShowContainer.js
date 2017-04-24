import React, { Component } from 'react';
import SiteTile from '../components/SiteTile';
import AllReviews from '../components/AllReviews';
import NewReviewForm from '../components/NewReviewForm';

class SiteShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {},
      site: {},
      reviews: [],
      overall_rating: '',
      site_id: '',
      votes: 0,
      design_body: '',
      usability_body: '',
      concept_body: '',
      formToggle: false
    }

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
    this.getSiteData()
    this.getReviewData()
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

  getReviewData() {
    let siteId = this.props.params.id
    fetch(`/api/v1/sites/${siteId}/reviews`, {
      method: 'GET',
      credentials: 'include'
    })
    .then(response => response.json())
    .then(responseData => {
      this.setState({ reviews: responseData })
    });
  }

  handleDelete() {
    let siteId = this.props.params.id;
    fetch(`/api/v1/sites/${siteId}`, {
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

  handleUsabilityChange(event) {
    this.setState({ usability_body: event.target.value });
  }

  handleConceptChange(event) {
    this.setState({ concept_body: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    let reviewPayload = {
      user_id: 1,
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
    console.log(reviewPayload)
    let siteId = this.props.params.id;
    fetch(`/api/v1/sites/${siteId}/reviews`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(reviewPayload)
    })

  }

  handleClearForm() {
    this.setState({
      user_id: 0,
      overall_rating: '',
      concept_body: '',
      design_body: '',
      usability_body: '',
    })
  }

  render() {
    let className;
    if (this.state.formToggle) {
      className = 'selected'
    } else {
      className = 'hidden'
    };

    let errorDiv;
    let errorItems;
    if (Object.keys(this.state.errors).length > 0) {
      errorItems = Object.values(this.state.errors).map(error => {
        return(<li key={error}>{error}</li>)
      });
      errorDiv = <div className="callout alert">{errorItems}</div>
    }

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
