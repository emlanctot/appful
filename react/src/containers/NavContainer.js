import React from 'react'
import { Link } from 'react-router';

class NavContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {}

  }

  render() {

    return(
      <div>
<<<<<<< HEAD
=======
      <div className="row" id="nav-bar">

      <div className="small-12 large-12 columns" id="nav-bar">

        <div className="menu">
          <ul className="menu align-right">
            <li><Link to="/profiles">My Profile</Link></li>
            <li><a href="/users/edit">Login/Signup</a></li>
            <li><a href="#">Search</a></li>
            <li><Link to="/">Home</Link></li>
            <li id="logo"><a href="#">APPFUL</a></li>
          </ul>
        </div>

        </div>
        </div>
>>>>>>> master
        {this.props.children}
      </div>

    )
  }
}

export default NavContainer;
