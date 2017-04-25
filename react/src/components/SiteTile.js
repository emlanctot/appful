import React from 'react';
import { Link } from 'react-router';

class SiteTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    // debugger;

    return(
      <p>{this.props.current_user}</p>
      <div className="column row">
      <h3> <Link to={`/sites/${this.props.id}`}>{this.props.name}</Link> </h3>
      <img src="https://idagram.files.wordpress.com/2012/12/skjermbilde-2012-12-09-kl-17-38-00.png" width="400"/>
      <p> URL: <a href="${props.url}">{this.props.url}</a> </p>
      <p> {this.props.description} </p>
      <Link to='/'> <button type="button" onClick={this.props.handleDelete}>Delete This Site</button> </Link>
      </div>
    )
  }
}

export default SiteTile;
