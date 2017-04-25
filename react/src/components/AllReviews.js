import React from 'react'
import ReviewTile from './ReviewTile'

class AllReviews extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }
  render(){

    let reviews = this.props.reviews.map((review) => {
      return (
        <ReviewTile
          key = {review.id}
          id = {review.id}
          user_id = {review.user_id}
          overall_rating = {review.overall_rating}
          design_body = {review.design_body}
          usability_body = {review.usability_body}
          concept_body = {review.concept_body}
        />
      )
    })

    return(
      <div>
        {reviews}
      </div>

    )
  }
}

export default AllReviews;
