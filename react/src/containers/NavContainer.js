import React from 'react'

class NavContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {}

  }

  render() {

    return(
      <div>
        <h1> Navigation </h1>
        {this.props.children}
      </div>

    )
  }
}

export default NavContainer;
