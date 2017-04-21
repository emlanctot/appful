import React from 'react';

const NewReviewForm = (props) => {
  return(
    <div className="column row">
      <form onSubmit={props.handleReviewSubmit} className={props.className}>
        <label> Rating: </label>
        <input name="rating" type="float" onChange={props.ratingChange} value={props.rating}/>

        <label> Design: </label>
        <input name="design_body" type="text" onChange={props.designChange} value={props.design}/>

        <label> Usability: </label>
        <input name="usability_body" type="text" onChange={props.usabilityChange} value={props.usability}/>

        <label> Concept: </label>
        <input name="concept_body" type="text" onChange={props.conceptChange} value={props.concept}/>

        <input type="submit" value="Submit"/>
      </form>
    </div>
  )
}

export default NewReviewForm;
