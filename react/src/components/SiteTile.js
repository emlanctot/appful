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
      <div className="small-12 medium-6 large-4 columns site-tile">
        <div className="box-content">

          <Link to={`/sites/${this.props.id}`}><h3 className= 'site-title'>{this.props.name}</h3></Link>
          <img className="tile-image" src={this.props.image}/>
          <p> URL: <a href={this.props.url}>{this.props.url}</a> </p>
          <p> {this.props.description} </p>
          <center>
            <a href={`/sites/${this.props.id}/edit`} onClick={this.props.handleUpdate} className={deleteClassName}> Edit Post </a>
            <Link to='/'>
            <button type="button" className={deleteClassName} onClick={this.props.handleDelete}>Delete This Site</button>
            </Link>
          </center>

        </div>
      </div>
    )
  }
}


export default SiteTile;
