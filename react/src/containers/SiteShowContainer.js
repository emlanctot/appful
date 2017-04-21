import React, { Component } from 'react';
import SiteTile from '../components/SiteTile';

class SiteShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      site: {}
    }
    this.handleDelete = this.handleDelete.bind(this)
  }

  componentDidMount() {
    this.getSiteData()
  }

  getSiteData() {
    let siteId = this.props.params.id
    fetch(`/api/v1/sites/${siteId}`, {
      method: 'GET',
      credentials: 'include'
    })
    .then(response => response.json())
    .then(responseData => {
      this.setState({ site: responseData })
    });
  }

  handleDelete() {
    console.log("hi")
    
    let siteId = this.props.params.id;
    fetch(`/api/v1/sites/${siteId}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" }
    })
  }

  render() {

    return(
      <div className="column row">
        <SiteTile
          handleDelete = {this.handleDelete}
          key = {this.state.site.id}
          id = {this.state.site.id}
          name = {this.state.site.name}
          url = {this.state.site.url}
          description = {this.state.site.description}
          collaborators = {this.state.site.collaborators}
          github_url = {this.state.site.github_url}
          experience = {this.state.site.experience}
        />
      </div>
    )
  }
}

export default SiteShowContainer;
