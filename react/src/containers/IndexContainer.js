import React from 'react'
import NewSiteForm from '../components/NewSiteForm'
import AllSites from '../components/AllSites'

class IndexContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      errors: {},
      sites: [],
      name: '',
      user_id: 1,
      url: '',
      description: '',
      collaborators: '',
      github_url: '',
      experience: '',
      formToggle: false,
      image: ''
    }
    this.handleFormButtonClick = this.handleFormButtonClick.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleUrlChange = this.handleUrlChange.bind(this)
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
    this.handleCollaboratorsChange = this.handleCollaboratorsChange.bind(this)
    this.handleGithubUrlChange = this.handleGithubUrlChange.bind(this)
    this.handleExperienceChange = this.handleExperienceChange.bind(this)
    this.handleImageChange = this.handleImageChange.bind(this)
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
      user_id: 1,
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
      let sitePayload = {
        name: this.state.name,
        user_id: this.state.user_id,
        url: this.state.url,
        description: this.state.description,
        collaborators: this.state.collaborators,
        github_url: this.state.github_url,
        experience: this.state.experience,
        image: this.state.image
      }
      this.sendInput(sitePayload)
      this.getData()
      this.handleClearForm()
      this.validateImageChange(this.state.image)
      this.validateURLChange(this.state.url)
    }
  }

  sendInput(sitePayload) {
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
    console.log(this.state.experience)
  }

  handleImageChange(event) {
    this.setState({ image: event.target.value });
    console.log(this.state.image)
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

  validateImageChange(image) {
    if (image === '' || image === ' ') {
      let newError = { image: "Website image should not be blank"};
      this.setState({ errors: Object.assign(this.state.errors, newError) });
      return false;
    } else {
      let errorState = this.state.errors;
      delete errorState.image;
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
          creatorValue = {this.state.user_id}
          urlValue = {this.state.url}
          descriptionValue = {this.state.description}
          collaboratorsValue = {this.state.collaborators}
          githubUrlValue = {this.state.github_url}
          experienceValue = {this.state.experience}
          imageValue = {this.state.image}

          nameChange = {this.handleNameChange}
          creatorChange = {this.handleCreatorIdChange}
          urlChange = {this.handleUrlChange}
          descriptionChange = {this.handleDescriptionChange}
          collaboratorsChange = {this.handleCollaboratorsChange}
          githubUrlChange = {this.handleGithubUrlChange}
          experienceChange = {this.handleExperienceChange}
          imageChange = {this.handleImageChange}

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
