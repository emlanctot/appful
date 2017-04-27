import React from 'react'

const NewSiteForm = (props) => {
  return(
    <div className="column row submit-app">
      <div>
        <center> <button type="button" onClick={props.handleFormButtonClick}>Submit an App</button> </center>
      </div>
      <form onSubmit={props.handleSubmit} className={props.className} id="new-site">
        <label> Name: </label>
        <input name="name" type="text" onChange={props.nameChange} value={props.nameValue}/>

        <label> URL: </label>
        <input name="url" type="text" onChange={props.urlChange} value={props.urlValue}/>

        <label> Description: </label>
        <textarea name="description" onChange={props.descriptionChange} value={props.descriptionValue}/>

        <label> Collaborators: </label>
        <input name="collaborators" type="text" onChange={props.collaboratorsChange} value={props.collaboratorsValue}/>

        <label> Github URL: </label>
        <input name="github_url" type="text" onChange={props.githubUrlChange} value={props.githubUrlValue}/>

        <label> Experience: </label>
        <input name="experience" type="text" onChange={props.experienceChange} value={props.experienceValue}/>

        <label> Website Image: </label>
        <input name="image" type="text" onChange={props.imageChange} value={props.imageValue}/>

        <input type="submit" value="submit"/>
      </form>
    </div>
  )
}

export default NewSiteForm
