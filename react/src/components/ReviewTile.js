import React from 'react'
import { Link } from 'react-router';

class ReviewTile extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      vote_count: this.props.vote_count
    }
    this.handleUpvote = this.handleUpvote.bind(this);
    this.handleDownvote = this.handleDownvote.bind(this);
  }

  handleUpvote() {
    let value = this.state.vote_count + 1;
    let id = this.props.id;
    this.setState({ vote_count: value });
    let votePayload = {
      review_id: id,
      overall_rating: this.props.overall_rating,
      user_id: this.props.user_id,
      site_id: this.props.site_id,
      design_body: this.props.design_body,
      usability_body: this.props.usability_body,
      concept_body: this.props.concept_body,
      vote_count: this.state.vote_count
    }
    this.sendVote(votePayload);
  }

  handleDownvote() {
    let value = this.state.vote_count - 1;
    let id = this.props.id;
    this.setState({ vote_count: value });
    let votePayload = {
      review_id: id,
      overall_rating: this.props.overall_rating,
      user_id: this.props.user_id,
      site_id: this.props.site_id,
      design_body: this.props.design_body,
      usability_body: this.props.usability_body,
      concept_body: this.props.concept_body,
      vote_count: this.state.vote_count
    }
    this.sendVote(votePayload);
  }

  sendVote(votePayload) {
    let siteId = this.props.siteId;
    let reviewId = votePayload.review_id;
    fetch(`/api/v1/sites/${siteId}/reviews/${reviewId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(votePayload)
    })
  }

  render() {

  return(
    <div>
      <button onClick={this.handleUpvote} className="button" id="upvote">Upvote</button>
      <p> {this.state.vote_count} </p>
      <button  className="button" id="downvote">Downvote</button>

      <h3> Rating: {this.props.overall_rating} </h3>
      <p> Creator: Some person here </p>
      <p> Design: {this.props.design_body}</p>
      <p> Usability: {this.props.usability_body}</p>
      <p> Concept: {this.props.concept_body}</p>
    </div>
  )
}
}

export default ReviewTile;
