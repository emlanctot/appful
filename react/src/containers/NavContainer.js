import React from 'react';
import SearchBar from '../components/SearchBar';
import AllSites from '../components/AllSites';

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
    console.log(this.state.filtered_data)
    return(
      <div>
        <h1> Navigation </h1>

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
