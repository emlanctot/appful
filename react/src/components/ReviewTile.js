import React from 'react'
import { Link } from 'react-router';

const ReviewTile = (props) => {
  return(
    <div>
      <h3> Rating: {props.overall_rating} </h3>
      <p> Creator: Some person here </p>
      <p> Design: {props.design_body}</p>
      <p> Usability: {props.usability_body}</p>
      <p> Concept: {props.concept_body}</p>
    </div>
  )
}

export default ReviewTile;
