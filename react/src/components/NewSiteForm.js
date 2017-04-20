import React from 'react'

const NewSiteForm = (props) => {
  return(
    <form onSubmit={props.handleSubmit}>
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

      <input name='submit' type="submit" value="submit"/>
    </form>
  )
}

export default NewSiteForm
