import React from 'react'
import NewSiteForm from '../components/NewSiteForm'
import AllSites from '../components/AllSites'

class IndexContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      sites: [],
      name: '',
      creator_id: 1,
      url: '',
      description: '',
      collaborators: '',
      github_url: '',
      experience: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleCreatorIdChange = this.handleCreatorIdChange.bind(this)
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleUrlChange = this.handleUrlChange.bind(this)
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
    this.handleCollaboratorsChange = this.handleCollaboratorsChange.bind(this)
    this.handleGithubUrlChange = this.handleGithubUrlChange.bind(this)
    this.handleExperienceChange = this.handleExperienceChange.bind(this)
  }

  componentDidMount() {
    this.getData()
  }

  getData() {
  fetch(`/api/v1/sites`)
    .then(response => response.json())
    .then(responseData => {
      this.setState({ sites: responseData })
    });
  }

  handleClearForm() {
    this.setState({
      name: '',
      creator_id: 1,
      url: '',
      description: '',
      collaborators: '',
      github_url: '',
      experience: ''
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    let sitePayload = {
      name: this.state.name,
      creator_id: this.state.creator_id,
      url: this.state.url,
      description: this.state.description,
      collaborators: this.state.collaborators,
      github_url: this.state.github_url,
      experience: this.state.experience
    }
    this.sendInput(sitePayload)
    this.getData()
    this.handleClearForm()
  }

  sendInput(sitePayload) {
    console.log(sitePayload)
    fetch("/api/v1/sites.json", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(sitePayload)
    })
    .then(response => response.json())
    .then(responseData => {
      this.setState({ sites: [...this.state.sites, responseData] })
    })
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value })
  }

  handleCreatorIdChange(event) {
    this.setState({ creator_id: event.target.value })
  }

  handleUrlChange(event) {
    this.setState({ url: event.target.value })
  }

  handleDescriptionChange(event) {
    this.setState({ description: event.target.value })
  }

  handleCollaboratorsChange(event) {
    this.setState({ collaborators: event.target.value })
  }

  handleGithubUrlChange(event) {
    this.setState({ github_url: event.target.value })
  }

  handleExperienceChange(event) {
    this.setState({ experience: event.target.value })
  }

  render() {

    return(
      <div>
        <h1> Welcome to Appful </h1>

        <NewSiteForm
          nameValue = {this.state.name}
          creatorValue = {this.state.creator_id}
          urlValue = {this.state.url}
          descriptionValue = {this.state.description}
          collaboratorsValue = {this.state.collaborators}
          githubUrlValue = {this.state.github_url}
          experienceValue = {this.state.experience}

          nameChange = {this.handleNameChange}
          creatorChange = {this.handleCreatorIdChange}
          urlChange = {this.handleUrlChange}
          descriptionChange = {this.handleDescriptionChange}
          collaboratorsChange = {this.handleCollaboratorsChange}
          githubUrlChange = {this.handleGithubUrlChange}
          experienceChange = {this.handleExperienceChange}

          handleSubmit = {this.handleSubmit}
        />

        <AllSites
          sites = {this.state.sites}
        />

      </div>

    )
  }
}

export default IndexContainer
