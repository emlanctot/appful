import React from 'react'
import SiteTile from './SiteTile'

class AllSites extends React.Component {
  constructor(props){
    super(props);
    this.state = {}

  }
  render() {
    debugger;
    let sites = this.props.sites.map((site) => {
      return (
        <SiteTile
          key = {site.id}
          id = {site.id}
          name = {site.name}
          url = {site.url}
          description = {site.description}
          collaborators = {site.collaborators}
          github_url = {site.github_url}
          experience = {site.experience}
          image = {site.image}
        />
      )
    })

    return(
      <div>
        {sites}
      </div>

    )
  }
}

export default AllSites
