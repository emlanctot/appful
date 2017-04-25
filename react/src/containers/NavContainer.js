import React from 'react'

class NavContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {}

  }

  render() {

    return(
      <div>
      <div className="row" id="nav-bar">

      <div className="small-12 large-12 columns" id="nav-bar">

        <div className="menu">
          <ul className="menu">
            <li><a href="#">Login/Signup</a></li>
            <li><a href="#">Search</a></li>
            <li><a href="#">GitHub</a></li>
          </ul>
        </div>

        </div>
        </div>
        {this.props.children}
      </div>

    )
  }
}

export default NavContainer;
