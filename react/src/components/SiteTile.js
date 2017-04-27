import React from 'react';
import { Link } from 'react-router';

class SiteTile extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      admins: [],
      current_user: ''
    }
  }

  componentDidMount() {
    this.getUserData()
  }

  getUserData() {
    fetch(`/api/v1/users`, {credentials: 'same-origin'})
    .then(response => response.json())
    .then(responseData => {
      this.setState({
        admins: [...this.state.admins, responseData.admins],
        current_user: responseData.current_user
      });
    });
  }

  render() {
    let deleteClassName;
    if (this.state.current_user.admin) {
      deleteClassName = "show"
    } else {
      deleteClassName = "hidden"
    }
    return(
      <div className="column row">

        <h3> <Link to={`/sites/${this.props.id}`}>{this.props.name}</Link> </h3>
        <img src="https://idagram.files.wordpress.com/2012/12/skjermbilde-2012-12-09-kl-17-38-00.png" width="400"/>
        <p> URL: <a href="${props.url}">{this.props.url}</a> </p>
        <p> {this.props.description} </p>
        <Link to='/'> <button type="button" className={deleteClassName} onClick={this.props.handleDelete}>Delete This Site</button> </Link>
      </div>
    )
  }
}
}

export default SiteTile;
