import React from 'react';

const NewReviewForm = (props) => {
  return(
    <div className="column row">
      <div>
        <center><button type="button" onClick={props.handleFormButtonClick}>Submit A New Review</button></center>
      </div>
      <form onSubmit={props.handleSubmit} className={props.className}>
        <label> Rating: </label>
        <input name="rating" type="number" onChange={props.ratingChange} value={props.ratingValue}/>

        <label> Design: </label>
        <input name="design_body" type="text" onChange={props.designChange} value={props.urlValue}/>

        <label> Usability: </label>
        <input name="usability_body" type="text" onChange={props.usabilityChange} value={props.urlValue}/>

        <label> Concept: </label>
        <input name="concept_body" type="text" onChange={props.conceptChange} value={props.collaboratorsValue}/>

        <input type="submit" value="Submit"/>
      </form>
    </div>
  )
}

export default NewReviewForm;
