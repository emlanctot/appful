import React from 'react';
import SearchBar from '../components/SearchBar';
import AllSites from '../components/AllSites';
import { Link } from 'react-router';

class NavContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      query: '',
      filtered_data: []
    }
    this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
  }

  getSearchResults() {
    let query = { query: this.state.query }
    fetch(`/api/v1/searches`, {
      method: 'POST',
      credentials: 'include',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(query)
    })
    .then(response => response.json())
    .then(responseData => {
      this.setState({ filtered_data: responseData })
    });

  }

  handleSearchTermChange(event){
    this.setState({ query: event.target.value })
    this.getSearchResults();
  }



  render() {

    return(
      <div>
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

           <div className='searchbar'>
            <SearchBar
              query = {this.state.query}
              onChange = {this.handleSearchTermChange}
            />
          </div>

          <div className="search-results">
              <AllSites
                sites = {this.state.filtered_data}
              />
          </div>
          {this.props.children}
      </div>

    )
  }
}

export default NavContainer;
