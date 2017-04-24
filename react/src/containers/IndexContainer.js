import React from 'react'
import NewSiteForm from '../components/NewSiteForm'
import AllSites from '../components/AllSites'

class IndexContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      errors: {},
      sites: [],
      user: [],
      name: '',
      url: '',
      description: '',
      collaborators: '',
      github_url: '',
      experience: '',
      formToggle: false
    }
    this.handleFormButtonClick = this.handleFormButtonClick.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleUrlChange = this.handleUrlChange.bind(this)
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
    this.handleCollaboratorsChange = this.handleCollaboratorsChange.bind(this)
    this.handleGithubUrlChange = this.handleGithubUrlChange.bind(this)
    this.handleExperienceChange = this.handleExperienceChange.bind(this)
  }

  componentDidMount() {
    this.getData()
    this.getUserData()
  }

  getData() {
    fetch(`/api/v1/sites`)
      .then(response => response.json())
      .then(responseData => {
        this.setState({ sites: responseData })
      });
    }

  getUserData() {
    console.log("User data")
    fetch(`/api/v1/users`)
      .then(response => response.json())
      .then(responseData => {
        this.setState({ user: responseData })
      });
    }

  handleClearForm() {
    this.setState({
      name: '',
      url: '',
      description: '',
      collaborators: '',
      github_url: '',
      experience: ''
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    if (
      this.validateNameChange(this.state.name) ||
      this.validateURLChange(this.state.url) ||
      this.validateDescriptionChange(this.state.description)
    ) {
    let user = this.props.user
    let user_id = +(user)
    debugger;
    let sitePayload = {
        name: this.state.name,
        creator_id: user_id,
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
  }

  sendInput(sitePayload) {
    console.log(sitePayload)
    fetch("/api/v1/sites.json", {
      credentials: 'same-origin',
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(sitePayload)
    })
    .then(response => response.json())
    .then(responseData => {
      this.setState({ sites: [...this.state.sites, responseData] });
    });
  }

  handleNameChange(event) {
    this.validateNameChange(event.target.value);
    this.setState({ name: event.target.value });
  }

  handleUrlChange(event) {
    this.validateURLChange(event.target.value);
    this.setState({ url: event.target.value });
  }

  handleDescriptionChange(event) {
    this.validateDescriptionChange(event.target.value);
    this.setState({ description: event.target.value });
  }

  handleCollaboratorsChange(event) {
    this.setState({ collaborators: event.target.value });
  }

  handleGithubUrlChange(event) {
    this.setState({ github_url: event.target.value });
  }

  handleExperienceChange(event) {
    this.setState({ experience: event.target.value });
  }

  validateNameChange(name) {
    if (name === '' || name === ' ') {
      let newError = { name: 'Name should not be blank' };
      this.setState({ errors: Object.assign(this.state.errors, newError) });
      return false;
    } else {
      let errorState = this.state.errors;
      delete errorState.name;
      this.setState({ errors: errorState });
      return true;
    }
  }


  validateURLChange(url) {
    if (url === '' || url === ' ') {
      let newError = { url: 'URL should not be blank' };
      this.setState({ errors: Object.assign(this.state.errors, newError) });
      return false;
    } else if ( !url.match(/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/)) {
      let newError = { url: 'URL should be authentic' };
      this.setState({ errors: Object.assign(this.state.errors, newError) });
      return false;
    } else {
      let errorState = this.state.errors;
      delete errorState.url;
      this.setState({ errors: errorState });
      return true;
    }
  }

  validateDescriptionChange(description) {
    if (description === '' || description === ' ') {
      let newError = { description: 'Description should not be blank' };
      this.setState({ errors: Object.assign(this.state.errors, newError) });
      return false;
    } else {
      let errorState = this.state.errors;
      delete errorState.description;
      this.setState({ errors: errorState });
      return true;
    }
  }

  handleFormButtonClick() {
    if (this.state.formToggle == false) {
      this.setState({
        formToggle: true,
        menuButton: ''
      })
    } else {
      this.setState({
        formToggle: false,
        menuButton: ''
      })
    }
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
        <center><h1>Welcome to Appful</h1></center>
        {errorDiv}

        <NewSiteForm
          className = {className}
          handleFormButtonClick = {this.handleFormButtonClick}
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

        <div className="column row">
          <AllSites
            sites = {this.state.sites}
          />
        </div>

      </div>

    )
  }
}

export default IndexContainer
