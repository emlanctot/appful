import React from 'react'
import ReviewTile from './ReviewTile'

class AllReviews extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  render(){
    let reviews = this.props.reviews.map((review) => {
      return (
        <ReviewTile
          key = {review.id}
          id = {review.id}
          vote_count = {review.vote_count}
          user_id = {review.user_id}
          username = {review.username}
          siteId = {review.site_id}
          overall_rating = {review.overall_rating}
          design_body = {review.design_body}
          usability_body = {review.usability_body}
          concept_body = {review.concept_body}
          created_at = {review.created_at}
          updated_at = {review.update_at}
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
