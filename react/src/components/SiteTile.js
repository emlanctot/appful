import React from 'react'
import { Link } from 'react-router';

class SiteTile extends React.Component {
  constructor(props){
    super(props);
    this.state = {}

    }
  render() {

  return(
    <div className="small-12 large-6 columns site-tile">

        <h3> <Link to={`/sites/${this.props.id}`}>{this.props.name}</Link> </h3>
        <img className="tile-image" src={this.props.image} />
        <p> URL: <a href="${this.props.url}">{this.props.url}</a> </p>
        <p> {this.props.description} </p>
        <Link to='/'> <button type="button" onClick={this.props.handleDelete}>Delete This Site</button> </Link>

    </div>
  )
}
}

export default SiteTile
